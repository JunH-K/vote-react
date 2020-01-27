import React from 'react';
import styled from 'styled-components';

const Header = ({ title = '설문지' }) => {
  return (
    <HeaderComponent>
      <H2>{title}</H2>
    </HeaderComponent>
  );
};

const HeaderComponent = styled.div`
  position: relative;
  background-color: black;
  color: white;
  padding: 10px;
`;

const H2 = styled.h2`
  color: white;
`;

export default Header;
