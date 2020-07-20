import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { ReactComponent as LpIcon } from '../icons/lp.svg';
import { H3 } from './Fonts';

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
      <LpIcon />
      <H3>VinylLib </H3>
      {children}
    </Wrapper>
  );
};

export default Banner;
