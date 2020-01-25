import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import useStore from '../../store/useStore';

const VoteContainer = ({ match, history }) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const {
    params: { id },
  } = match;

  const { getVotes, updateVote } = useStore();
  const [vote] = getVotes(id);

  !vote && history.push('/');

  const onChange = useCallback(
    index => () => {
      setSelectedItem(index);
    },
    []
  );

  const onClickVote = useCallback(() => {
    updateVote(id, selectedItem, '투표자11', () =>
      history.push(`/result/${id}`)
    );
  }, [history, id, updateVote, selectedItem]);

  const isSelected = selectedItem > -1;

  return (
    <>
      {vote ? (
        <div className="vote_container">
          <div className="vote_title"><h2>{vote.voteTitle}</h2></div>
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
