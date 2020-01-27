import React, { useEffect, useRef, useState } from 'react';
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

  !(totalVoter && items) && history.push('/vote-react');

  return totalVoter && items ? (
    <>
      <div className="graph_container">
        {items.map((item, index) => {
          return (
            <VoteItem item={item} index={index} key={item.title + index} />
          );
        })}
      </div>
      <div>
        <h3>전체투표수 : {`${totalVoter}명`}</h3>
      </div>
      <div className={'first'}>
        <Link to={'/'}>
          <Button type="primary"> 투표목록</Button>
        </Link>
      </div>
    </>
  ) : null;
};

const VoteItem = ({ item, index }) => {
  const [per, setPer] = useState(0);
  const interval = useRef(0);

  useEffect(() => {
    if (!interval.current) {
      const step = Math.abs(Math.floor(2000 / (0 - item.percentage)));
      interval.current = setInterval(() => {
        setPer(per => {
          return per + 1;
        });
      }, step);
    }

    if (per > item.percentage) {
      clearInterval(interval.current);
      setPer(item.percentage);
    }
  }, [per, item.percentage]);

  useEffect(() => {
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
      <div className="result_title">
        <h3>
          {`${index + 1}. `}
          {item.title}
          {` (${item.votes}표)`}
        </h3>
      </div>
      <div className={'graph'}>
        <SpanGraph width={item.percentage} index={index}>
          {per}%
        </SpanGraph>
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
  background: ${({ index }) => (index % 2 === 0 ? 'LightSkyBlue' : 'pink')};
  border-radius: 10px;
  box-sizing: border-box;
  animation: ${({ width }) => stack(width)} 2s 1;
`;

export default VoteResultContainer;
