import React, { useState } from 'react';
import { Button } from 'antd';

const VoteContainer = ({ match, history }) => {
  const [isSelected, setIsSelected] = useState(false);

  const {
    params: { id },
  } = match;

  const onChange = event => {
    setIsSelected(true);
    console.log(event.target.value);
  };

  const onClickVote = () => {
    // TODO:데이터 저장처리
    history.push(`/result/${id}`);
  };

  return (
    <>
      <div className="vote_container">
        <div className="vote_title">내용내용내용</div>
        <div className="vote_List">
          <div className="vote_item">
            <input
              type="radio"
              id="1"
              name="drone"
              value="1"
              onChange={onChange}
            />
            <label htmlFor="1">11111</label>
          </div>
        </div>

        {isSelected && (
          <div>
            <Button onClick={onClickVote}>Vote</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default VoteContainer;
