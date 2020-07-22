import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Logo from './Logo';

const Wrapper = styled.div`
  background: ${colors.text.normal};
  padding: 0.2em 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Banner = ({ children }) => {
  return (
    <Wrapper>
      <Logo />
      {children}
    </Wrapper>
  );
};

export default Banner;
