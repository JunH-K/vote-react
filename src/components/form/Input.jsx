import { Icon, Input as InputAntd, Tooltip } from 'antd';
import React, { memo, useCallback, useEffect } from 'react';

const Input = memo(
  ({
    placeholder = '입력하세요',
    value = '',
    onChange,
    range = [],
    type = '',
    inputRef,
    checkValids,
    name = '',
    ...rest
  }) => {
    const InputComponent = InputAntd[type] ? InputAntd[type] : InputAntd;

    const checkValidation = useCallback(() => {
      const { length = 0 } = value;
      const [minLength = 1, maxLength = 100] = range;
      return length >= minLength && length <= maxLength;
    }, [value, range]);

    const renderToolTip = isValid => {
      const { length = 0 } = value;
      if (!length || !range.length) {
        return { suffix: <span /> };
      }

      const [minLength = 1, maxLength = 100] = range;

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

    const isValid = checkValidation();
    const suffix = renderToolTip(isValid);

    return (
      <InputComponent
        ref={inputRef}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        {...rest}
        {...suffix}
      />
    );
  }
);

export default Input;
