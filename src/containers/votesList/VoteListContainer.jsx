import React from 'react';
import { Button } from 'antd';
import useStore from '../../store/useStore';

const VoteListContainer = ({ match, history }) => {
  const { getVotes } = useStore();
  const votes = getVotes();
  const user = '누가만들었음';

  const onClickDelete = index => event => {
    event.stopPropagation();
    console.log(`삭제${index}`);
  };

  const onClickEdit = index => event => {
    event.stopPropagation();
    console.log(`수정${index}`);
  };

  const startVote = index => () => {
    history.push(`/votes/${index}`);
  };

  return (
    <>
      <div className="contents">
        {votes.map((vote, index) => {
          return (
            <div className="item" onClick={startVote(index)} key={index}>
              <h3>{vote.voteTitle}</h3>
              <p>생성자:{vote.creator}</p>
              <p>기간:{vote.votePeriod.toString()}</p>
              <p>진행중:진행중</p>
              {vote.creator === user && (
                <div className="btn_wrap">
                  <Button
                    className={'btn btn_delete'}
                    onClick={onClickDelete(index)}
                  >
                    삭제
                  </Button>
                  <Button
                    className={'btn btn_edit'}
                    onClick={onClickEdit(index)}
                  >
                    수정
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VoteListContainer;
