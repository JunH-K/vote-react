import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const VoteResultContainer = props => {
  const {
    match: {
      params: { id },
    },
  } = props;
  const per = 50;
  console.log(`결과 id ${id}`);
  return (
    <>
      <div className="graph_container">
        <div className={'graph'}>
          <SpanGraph width={per}>{per}%</SpanGraph>
        </div>

        <div className={'graph'}>
          <SpanGraph width={per}>{per}%</SpanGraph>
        </div>

        <div className={'graph'}>
          <SpanGraph width={per}>{per}%</SpanGraph>
        </div>
      </div>
      <div>전체투표수:~</div>
      <div className={'first'}>
        <Link to={'/'}>
          <Button>처음으로</Button>
        </Link>
      </div>
    </>
  );
};

const stack = width => {
  return keyframes`
        0% {
        width: 0;
    }
    100% {
        width: ${width}%;
    }
    `;
};

const SpanGraph = styled.span`
  display: block;
  height: 40px;
  width: ${({ width }) => width}%;
  line-height: 40px;
  text-align: right;
  background: pink;
  border-radius: 40px;
  box-sizing: border-box;
  animation: ${({ width }) => stack(width)} 1s 1;
`;

export default VoteResultContainer;
