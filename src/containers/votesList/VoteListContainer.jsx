import React, { useEffect } from 'react';
import { Button } from 'antd';
import useStore from '../../store/useStore';
import moment from 'moment';

const VoteListContainer = ({ history }) => {
  const { getVotes, getLoginUser, logout, deleteVote } = useStore();
  const votes = getVotes();
  const user = getLoginUser();

  useEffect(() => {
    if (!user || !Object.entries(user).length) {
      history.push('/');
    }
  });

  const onClickDelete = index => event => {
    event.stopPropagation();
    deleteVote(index, () => {
      history.push('/votes');
      alert('삭제 되었습니다.');
    });
  };

  const onClickEdit = index => event => {
    event.stopPropagation();
    history.push(`/edit/${index}`);
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
      <div style={{ textAlign: 'left' }}>{user.name} 님 안녕하세요!</div>
      <div style={{ textAlign: 'right', margin: '10px' }}>
        <Button type="primary" onClick={onClickCreateVote}>
          설문지 생성하기
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: '10px' }}
          onClick={onClickLogout}
        >
          로그아웃
        </Button>
      </div>
      {!votes.length && '설문지가 아직 없습니다. 생성하세요.'}
      {user ? (
        <div className="contents">
          {votes.map((vote, index) => {
            return (
              <VoteListItem
                key={vote.creator + index}
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
  const start = moment(vote.votePeriod[0]).format('YYYY-MM-DD HH:mm');
  const end = moment(vote.votePeriod[1]).format('YYYY-MM-DD HH:mm');
  const isBetween = moment().isBetween(
    moment(vote.votePeriod[0]),
    moment(vote.votePeriod[1])
  );

  return (
    <div className="item" onClick={startVote(index)} key={index}>
      <h3 style={{ margin: '5px', borderBottom: '1px solid black' }}>
        {vote.voteTitle}
      </h3>
      <p className={'sub_title'}>* 생성자 : {vote.creator}</p>
      <p className={'sub_title'}>* 설문 기간</p>
      <p>{`${start} ~ ${end}`}</p>
      <p className={'sub_title'}>* 설문 진행 여부</p>
      <p>{isBetween ? '진행중' : ' 설문 기간이 아닙니다.'}</p>
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
