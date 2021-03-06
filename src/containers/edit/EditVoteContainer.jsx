import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, List } from 'antd';
import Input from '../../components/form/Input';
import DatePicker from '../../components/form/DatePicker';
import useStore from '../../store/useStore';
import moment from 'moment';

const EditVoteContainer = ({ match, history }) => {
  const { getVotes, editVote } = useStore();
  const {
    params: { id },
  } = match;
  const [voteItems, setVoteItems] = useState(['', '', '']);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState([]);
  const [AllValid, setAllValid] = useState([]);
  const titleRange = useRef([2, 30]);
  const voteItemRange = useRef([2, 10]);
  const { getLoginUser } = useStore();
  const user = getLoginUser();
  const [vote] = getVotes(id);

  useEffect(() => {
    const [titleMin, titleMax] = titleRange.current;
    const [itemMin, itemMax] = voteItemRange.current;
    const { length: titleLength } = title;

    const isTitleValid = titleMin <= titleLength && titleMax >= titleLength;

    const isVoteItemsValid = voteItems.every(item => {
      const { length: itemLength } = item;
      return itemMin <= itemLength && itemMax >= itemLength;
    });

    const isDateValid = !!date;
    setAllValid([isTitleValid, isVoteItemsValid, isDateValid]);
  }, [title, voteItems, date]);

  useEffect(() => {
    const { voteTitle, items, votePeriod, creator } = vote;
    const [minDate, maxDate] = votePeriod;

    if (creator !== user.name) {
      history.push('/votes');
    }

    setTitle(voteTitle);

    setVoteItems([
      ...items.map(item => {
        return item.title;
      }),
    ]);

    setDate([moment(minDate), moment(maxDate)]);
  }, [history]);

  const onChangeRangePicker = useCallback(date => {
    setDate(date);
  }, []);

  const onChangeTitle = useCallback(event => {
    setTitle(event.target.value);
  }, []);

  const onChangeInput = useCallback(
    index => event => {
      const {
        target: { value },
      } = event;
      setVoteItems(voteItems => {
        return voteItems.map((item, itemIndex) => {
          if (itemIndex === index) {
            return value;
          }
          return item;
        });
      });
    },
    []
  );

  const onClickDelete = useCallback(
    index => () => {
      setVoteItems(items => {
        if (items.length === 3) {
          alert('최소 항목은 3개입니다!');
          return items;
        }
        return items.filter((item, itemIndex) => itemIndex !== index);
      });
    },
    []
  );

  const onClickEditComplete = useCallback(() => {
    editVote({ title, voteItems, date, index: id }, () => {
      alert('수정 완료!');
      history.push('/votes');
    });
  }, [title, voteItems, date, history, editVote, id]);

  const onClickAddItem = useCallback(() => {
    setVoteItems([...voteItems, '']);
  }, [voteItems]);

  const isDisabledCreateButton = () => {
    return AllValid.some(item => !item);
  };

  return (
    <>
      <div className={'vote_item'}>
        제목
        <Input
          onChange={onChangeTitle}
          value={title}
          placeholder={`${titleRange.current[0]}~${titleRange.current[1]}자를 입력하세요.`}
          range={titleRange.current}
        />
      </div>
      <div className={'vote_item'}>
        투표항목
        <Button onClick={onClickAddItem} type={'primary'}>
          추가
        </Button>
        <List
          bordered
          dataSource={voteItems}
          renderItem={(item, index) => (
            <List.Item>
              <Input
                type={'Search'}
                value={item}
                placeholder={`투표항목을 입력하세요. ${voteItemRange.current[0]}~${voteItemRange.current[1]}자`}
                enterButton="삭제"
                onChange={onChangeInput(index)}
                onSearch={onClickDelete(index)}
                range={voteItemRange.current}
              />
            </List.Item>
          )}
        />
      </div>
      <div className={'datePicker vote_item'}>
        기간 <br />
        <DatePicker onChangeRangePicker={onChangeRangePicker} value={date} />
      </div>
      <div className={'crate_btn_wrap'}>
        <Button
          type="primary"
          block
          className={'create_btn'}
          onClick={onClickEditComplete}
          disabled={isDisabledCreateButton()}
        >
          수정완료
        </Button>
      </div>
    </>
  );
};

export default EditVoteContainer;
