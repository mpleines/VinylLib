import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { NavigationWrapper } from './Navigation';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  background: ${colors.text.normal};
  padding: 0.2em 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Banner = ({ children }) => {
  return (
    <NavigationWrapper>
      <Wrapper>
        <Link to="/landing">
          <Logo />
        </Link>
        {children}
      </Wrapper>
    </NavigationWrapper>
  );
};

export default Banner;
