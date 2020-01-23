import React from 'react';
import styled from 'styled-components';

const Header = ({ title = '제목' }) => {
  return (
    <HeaderComponent>
      <h2>{title}</h2>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div`
  position: relative;
  background-color: rgb(61, 78, 85);
  padding: 10px;
`;

export default Header;
