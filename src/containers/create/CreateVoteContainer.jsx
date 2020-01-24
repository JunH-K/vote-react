import React, { useCallback, useRef, useState } from 'react';
import { List, Button } from 'antd';
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment from 'moment';
import Input from '../../components/form/Input';
import DatePicker from '../../components/form/DatePicker';

const CreateVoteContainer = () => {
  const [voteItems, setVoteItems] = useState(['', '', '']);
  const [title, setTitle] = useState('');
  const titleRange = useRef([2, 20]);
  const voteItemRange = useRef([2, 10]);

  const onChangeRangePicker = useCallback((date, dateString) => {
    console.log(date, dateString);
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
        return items.filter((item, itemIndex) => itemIndex !== index);
      });
    },
    []
  );

  const onClickCreate = useCallback(() => {
    console.log('만들기기');
  }, []);

  const onClickAddItem = () => {
    setVoteItems([...voteItems, '']);
  };

  return (
    <>
      <div>
        제목
        <Input
          onChange={onChangeTitle}
          value={title}
          placeholder={'2~10자를 입력하세요.'}
          range={titleRange.current}
        />
      </div>
      <div>
        투표항목 <Button onClick={onClickAddItem}>추가</Button>
        <List
          bordered
          dataSource={voteItems}
          renderItem={(item, index) => (
            <List.Item>
              <Input
                type={'Search'}
                value={item}
                placeholder="투표항목을 입력하세요. 2~10자"
                enterButton="삭제"
                onChange={onChangeInput(index)}
                onSearch={onClickDelete(index)}
                range={voteItemRange.current}
              />
            </List.Item>
          )}
        />
      </div>
      <div className={'datePicker'}>
        기간 <br />
        <DatePicker onChangeRangePicker={onChangeRangePicker} />
      </div>
      <div className={'crate_btn_wrap'}>
        <Button className={'create_btn'} onClick={onClickCreate}>
          투표생성
        </Button>
      </div>
    </>
  );
};

export default CreateVoteContainer;
