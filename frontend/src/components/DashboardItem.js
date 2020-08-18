import React from 'react';
import { Title, Heading, Helper } from './Fonts';
import Square from './Square';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const DashboardItemLink = styled(Link)`
  text-decoration: none;
`;

export const DashboardItem = ({ title, subTitle, children, linkTo }) => (
  <div>
    <Heading>{title}</Heading>
    <DashboardItemLink to={linkTo}>
      <Square>
        <Title color={colors.primary['500']} noMargin style={{ width: '100%' }}>
          {children}
        </Title>
        {subTitle && <Helper black>{subTitle}</Helper>}
      </Square>
    </DashboardItemLink>
  </div>
);
