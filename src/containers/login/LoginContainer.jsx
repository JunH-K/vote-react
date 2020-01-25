import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Input from '../../components/form/Input';
import { Button } from 'antd';
import useStore from '../../store/useStore';

const InputGroup = styled.div`
  text-align: right;
  margin-bottom: 25px;
`;

const LoginContainer = ({ history }) => {
  const [createId, setCreateId] = useState('');
  const [loginId, setLoginId] = useState('');
  const { createUser, login, getLoginUser } = useStore();
  const inputRef = useRef(null);
  const user = getLoginUser();

  useEffect(() => {
    if (Object.entries(user).length) {
      history.push('/votes');
    }
  }, [history, user]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const onChangeCreateId = useCallback(event => {
    const {
      target: { value },
    } = event;
    setCreateId(value);
  }, []);

  const onChangeLoginId = useCallback(event => {
    const {
      target: { value },
    } = event;
    setLoginId(value);
  }, []);

  const onClickCreateUser = useCallback(() => {
    createUser(createId, isSuccess => {
      if (isSuccess) {
        alert(`${createId} 아이디 생성!`);
        setCreateId('');
        inputRef.current.focus();
      }
    });
  }, [createId, createUser]);

  const onClickLogin = useCallback(() => {
    login(loginId, isLogin => {
      if (isLogin) {
        history.push('/votes');
      } else {
        setLoginId('');
      }
    });
  }, [loginId, login, history]);

  return (
    <>
      <InputGroup>
        <Input
          placeholder={'생성 할 아이디'}
          value={createId}
          onChange={onChangeCreateId}
          onPressEnter={onClickCreateUser}
        />
        <Button
          type="primary"
          block
          onClick={onClickCreateUser}
          disabled={!createId}
        >
          사용자 생성
        </Button>
      </InputGroup>
      <InputGroup>
        <Input
          inputRef={inputRef}
          placeholder={'로그인 아이디'}
          value={loginId}
          onChange={onChangeLoginId}
          onPressEnter={onClickLogin}
        />
        <Button type="primary" block onClick={onClickLogin} disabled={!loginId}>
          로그인
        </Button>
      </InputGroup>
    </>
  );
};

export default LoginContainer;
