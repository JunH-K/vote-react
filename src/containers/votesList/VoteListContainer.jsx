import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const VoteListContainer = ({ match }) => {
  const onClickDelete = index => event => {
    event.stopPropagation();
    console.log(`삭제${index}`);
  };

  const onClickEdit = index => event => {
    event.stopPropagation();
    console.log(`수정${index}`);
  };

  return (
    <>
      <div className="contents">
        <Link to={`/votes/${0}`}>
          <div className="item">
            <h3>
              {' '}
              제목제목asdfsdafsadf safdasd fsa fasadf asad fsad fas fas as a
              sfds fsa fsa fasf asf asf
            </h3>
            <p>생성자:111</p>
            <p>기간:11~11</p>
            <p>진행중:진행중</p>
            <div className="btn_wrap">
              <Button className={'btn btn_delete'} onClick={onClickDelete(0)}>
                삭제
              </Button>
              <Button className={'btn btn_edit'} onClick={onClickEdit(0)}>
                수정
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VoteListContainer;
