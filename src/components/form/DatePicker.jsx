import React, { memo, useCallback, useEffect } from 'react';
import { DatePicker as DatePickerAntd } from 'antd';
import locale from 'antd/es/date-picker/locale/ko_KR';
import moment from 'moment';

const { RangePicker } = DatePickerAntd;

const DatePicker = memo(({ onChangeRangePicker:onChange, checkValids, name }) => {
  useEffect(() => {
    checkValids && checkValids({ name, isValid: false });
  }, []);

  const disabledDate = useCallback(current => {
    return current && current < moment().startOf('day');
  }, []);

  const range = useCallback((start, end) => {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }, []);

  const disabledRangeTime = useCallback(
    (_, type) => {
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
    },
    [range]
  );

  const onChangeRangePicker = (date) => {
    onChange(date);
    checkValids && checkValids({ name, isValid: true });
  };

  return (
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
  );
});

export default DatePicker;
