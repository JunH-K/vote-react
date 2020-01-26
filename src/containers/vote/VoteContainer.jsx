import React, { useCallback, useEffect, useState } from 'react';
import { Button } from 'antd';
import useStore from '../../store/useStore';
import moment from 'moment';

const VoteContainer = ({ match, history }) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const {
    params: { id },
  } = match;
  const { getVotes, updateVote, getLoginUser } = useStore();
  const [vote] = getVotes(id);
  const user = getLoginUser();

  !vote && history.push('/');

  useEffect(() => {
    if (vote) {
      const { name } = user;
      const { voter } = vote;
      if (voter.includes(name)) {
        alert('이미 투표 했습니다.');
        history.push(`/result/${id}`);
      }
    }
  });

  useEffect(() => {
    if (vote) {
      const isBetween = moment().isBetween(
        moment(vote.votePeriod[0]),
        moment(vote.votePeriod[1])
      );

      if (!isBetween) {
        alert('투표 기간이 아닙니다.');
        history.push(`/result/${id}`);
      }
    }
  });

  const onChange = useCallback(
    index => () => {
      setSelectedItem(index);
    },
    []
  );

  const onClickVote = useCallback(() => {
    updateVote(id, selectedItem, user.name, () =>
      history.push(`/result/${id}`)
    );
  }, [history, id, updateVote, selectedItem, user.name]);

  const isSelected = selectedItem > -1;

  return (
    <>
      {vote ? (
        <div className="vote_container">
          <div className="vote_title">
            <h2>{vote.voteTitle}</h2>
          </div>
          <div className="vote_List">
            {vote.items.map((item, index) => {
              return (
                <div className="vote_item" key={index}>
                  <input
                    type="radio"
                    id={index}
                    name="vote"
                    value={item.title}
                    onChange={onChange(index)}
                  />
                  <label style={{ fontSize: '20px' }} htmlFor={index}>
                    {item.title}
                  </label>
                </div>
              );
            })}
          </div>

          {isSelected && (
            <div>
              <Button type="primary" block onClick={onClickVote}>
                투표
              </Button>
            </div>
          )}
        </div>
      ) : null}
    </>
  );
};

export default VoteContainer;
