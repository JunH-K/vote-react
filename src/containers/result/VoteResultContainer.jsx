import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import useStore from '../../store/useStore';

const VoteResultContainer = props => {
  const { getResult } = useStore();
  const {
    match: {
      params: { id },
    },
    history,
  } = props;
  const { totalVoter, items } = getResult(id);

  !(totalVoter && items) && history.push('/');

  return totalVoter && items ? (
    <>
      <div className="graph_container">
        {items.map((item, index) => {
          return (
            <>
              <div className="result_title">
                {`${index + 1}. `}
                {item.title}
                {` (${item.votes}표)`}
              </div>
              <div className={'graph'}>
                <SpanGraph width={item.percentage} index={index}>
                  {item.percentage}%
                </SpanGraph>
              </div>
            </>
          );
        })}
      </div>
      <div>전체투표수 : {totalVoter}</div>
      <div className={'first'}>
        <Link to={'/'}>
          <Button>처음으로</Button>
        </Link>
      </div>
    </>
  ) : null;
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
  background: ${({ index }) =>
    index % 2 === 0 ? 'LightSkyBlue' : 'pink'};
  border-radius: 40px;
  box-sizing: border-box;
  animation: ${({ width }) => stack(width)} 1s 1;
`;

export default VoteResultContainer;
