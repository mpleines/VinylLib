import React from 'react';
import styled from 'styled-components';
import { Divider } from './Divider';
import { PrimaryButton } from './Buttons';
import { ReactComponent as LpIcon } from '../icons/lp.svg';
import { ReactComponent as UserIcon } from '../icons/user.svg';
import { Link } from './Link';
import { useHistory } from 'react-router-dom';
import { colors } from '../utils/colors';
import Logo from '../components/Logo';
import Margin from '../components/Margin';

const NavigationItemContainer = styled.div`
  padding: 0.2em 0.7em;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > * {
    margin-right: 1.2em;
  }

  &:last-child {
    margin: 0;
  }
`;

const StyledNavigation = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  background: ${colors.text.normal};
  display: flex;
  justify-content: space-between;
`;

export const Navigation = () => {
  const history = useHistory();

  return (
    <StyledNavigation>
      <NavigationItemContainer>
        <Link to="/dashboard">
          <Logo />
        </Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/all-records">All Records</Link>
      </NavigationItemContainer>
      <NavigationItemContainer>
        <PrimaryButton onClick={() => history.push('/add-record')}>
          Add Record
        </PrimaryButton>
        <Link to="/settings">
          <UserIcon />
        </Link>
      </NavigationItemContainer>
    </StyledNavigation>
  );
};
