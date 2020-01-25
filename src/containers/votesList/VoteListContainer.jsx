import React, { useEffect } from 'react';
import { Button } from 'antd';
import useStore from '../../store/useStore';

const VoteListContainer = ({ match, history }) => {
  const { getVotes, getLoginUser, logout } = useStore();
  const votes = getVotes();
  const user = getLoginUser();

  useEffect(() => {
    if (!Object.entries(user).length) {
      history.push('/login');
    }
  });

  const onClickDelete = index => event => {
    event.stopPropagation();
  };

  const onClickEdit = index => event => {
    event.stopPropagation();
  };

  const startVote = index => () => {
    history.push(`/votes/${index}`);
  };

  const onClickCreateVote = () => {
    history.push(`/create`);
  };

  const onClickLogout = () => {
    logout(() => {
      history.push(`/`);
    });
  };

  return (
    <>
      <div style={{ textAlign: 'right', margin: '10px' }}>
        <Button type="primary" onClick={onClickCreateVote}>
          투표 생성하기
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={onClickLogout}
        >
          로그아웃
        </Button>
      </div>
      {!votes.length && '투표가 아직 없습니다. 생성하세요.'}
      {user ? (
        <div className="contents">
          {votes.map((vote, index) => {
            return (
              <VoteListItem
                key={vote.creator}
                vote={vote}
                startVote={startVote}
                index={index}
                user={user}
                onClickDelete={onClickDelete(index)}
                onClickEdit={onClickEdit(index)}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
};

const VoteListItem = ({
  vote,
  startVote,
  index,
  user,
  onClickDelete,
  onClickEdit,
}) => {
  console.log(vote);
  console.log(user);
  return (
    <div className="item" onClick={startVote(index)} key={index}>
      <h3 style={{ margin: '5px', borderBottom: '1px solid black' }}>
        {vote.voteTitle}
      </h3>
      <p>생성자 : {vote.creator}</p>
      <p>기간 : {vote.votePeriod.toString()}</p>
      <p>진행중 : 진행중</p>
      {vote.creator === user.name && (
        <div className="btn_wrap">
          <Button
            type="primary"
            className={'btn btn_delete'}
            onClick={onClickDelete}
          >
            삭제
          </Button>
          <Button
            type="primary"
            className={'btn btn_edit'}
            onClick={onClickEdit}
          >
            수정
          </Button>
        </div>
      )}
    </div>
  );
};

export default VoteListContainer;
