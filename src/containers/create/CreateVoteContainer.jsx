import React, { useCallback, useState } from 'react';
import { DatePicker, Input, List, Button } from 'antd';
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment from 'moment';

const { RangePicker } = DatePicker;
const { Search } = Input;

const CreateVoteContainer = () => {
  const [voteItems, setVoteItems] = useState(['', '', '']);

  const onChangeRangePicker = useCallback((date, dateString) => {
    console.log(date, dateString);
  }, []);

  const onChangeInput = useCallback(
    index => event => {
      console.log(index);
      console.log(event.target.value);
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

  const onClickItemAdd = () => {
    setVoteItems([...voteItems, '']);
  };

  const disabledDate = useCallback(current => {
    return current && current < moment().endOf('day');
  }, []);

  const range = useCallback((start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }, []);

  const disabledRangeTime = useCallback((_, type) => {
    if (type === 'start') {
      return {
        disabledHours: () => range(0, 60).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    }
    return {
      disabledHours: () => range(0, 60).splice(20, 4),
      disabledMinutes: () => range(0, 31),
      disabledSeconds: () => [55, 56],
    };
  }, []);

  return (
    <>
      <div>
        제목 <Input className={'invalid'} placeholder={'2~20자'} />
      </div>
      <div>
        투표항목 <Button onClick={onClickItemAdd}>추가</Button>
        <List
          bordered
          dataSource={voteItems}
          renderItem={(item, index) => (
            <List.Item>
              <Search
                placeholder="투표항목을 입력하세요. 2~10자"
                enterButton="삭제"
                onChange={onChangeInput(index)}
                onSearch={onClickDelete(index)}
              />
            </List.Item>
          )}
        />
      </div>
      <div className={'datePicker'}>
        기간 <br />
        <RangePicker
          onChange={onChangeRangePicker}
          locale={locale}
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [
              moment('00:00:00', 'HH:mm:ss'),
              moment('11:59:59', 'HH:mm:ss'),
            ],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
      <div className={'crate_btn_wrap'}>
        <Button className={'create_btn'} onClick={onClickCreate}>
          만들기
        </Button>
      </div>
    </>
  );
};

export default CreateVoteContainer;
