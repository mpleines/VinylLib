import React from 'react';
import { Title, Helper, H3 } from './Fonts';
import Square from './Square';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const DashboardItemLink = styled(Link)`
  text-decoration: none;
`;

export const DashboardItem = ({ title, subTitle, children, linkTo }) => (
  <DashboardItemLink to={linkTo}>
    <Square>
      <H3 noMargin black>
        {title}
      </H3>
      <Title color={colors.primary['500']} noMargin style={{ width: '100%' }}>
        {children}
      </Title>
      <Helper black>{subTitle}</Helper>
    </Square>
  </DashboardItemLink>
);
