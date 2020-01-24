import { Icon, Input as InputAntd, Tooltip } from 'antd';
import React ,{memo}from 'react';

const Input = memo(({
  placeholder = '입력하세요',
  value = '',
  onChange,
  range = [],
  type = '',
  ...rest
}) => {
  const InputComponent = InputAntd[type] ? InputAntd[type] : InputAntd;

  const checkValidation = () => {
    const { length = 0 } = value;
    if (!length || !range.length) {
      return { suffix: <span /> };
    }

    const [minLength = 1, maxLength = 100] = range;
    const isValid = length >= minLength && length <= maxLength;
    let options = {
      tooltipTitle: `${minLength}~${maxLength}자를 입력하세요.`,
      type: 'warning',
      twoToneColor: '#eb2f96',
    };

    if (isValid) {
      options = {
        tooltipTitle: '',
        type: 'check-circle',
        twoToneColor: '#52c41a',
      };
    }

    const { tooltipTitle = '', ...iconProps } = options;
    return {
      suffix: (
        <Tooltip title={tooltipTitle}>
          <Icon theme="twoTone" {...iconProps} />
        </Tooltip>
      ),
    };
  };

  const suffix = checkValidation();

  return (
    <InputComponent
      onChange={onChange}
      defaultValue={value}
      placeholder={placeholder}
      {...rest}
      {...suffix}
    />
  );
});

export default Input;
