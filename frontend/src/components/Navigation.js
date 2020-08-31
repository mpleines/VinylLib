import React, { useState, useContext } from 'react';
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
import { Dropdown, DropdownItem } from './Dropdown';
import UserContext from '../contexts/UserContext';

const NavigationItem = ({ children, onClick }) => (
  <div role="button" onClick={onClick} style={{ cursor: 'pointer' }}>
    {children}
  </div>
);

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
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

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
        <NavigationItem onClick={() => setUserDropdownOpen(!userDropdownOpen)}>
          <UserIcon />
          <Dropdown
            isOpen={userDropdownOpen}
            onClose={() => setUserDropdownOpen(false)}
            title={user.username}
          >
            <DropdownItem onClick={() => history.push('/settings')}>
              Settings
            </DropdownItem>
          </Dropdown>
        </NavigationItem>
      </NavigationItemContainer>
    </StyledNavigation>
  );
};
