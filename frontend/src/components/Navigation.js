import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ButtonWithIcon } from './Buttons';
import { ReactComponent as UserIcon } from '../icons/user.svg';
import { Link } from './Link';
import { useHistory } from 'react-router-dom';
import { colors } from '../utils/colors';
import Logo from '../components/Logo';
import { Dropdown, DropdownItem } from './Dropdown';
import UserContext from '../contexts/UserContext';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';
import { Helper } from './Fonts';
import { ReactComponent as Arrow } from '../icons/arrow.svg';

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

const NavigationWrapper = styled.div`
  top: 0;
  width: 100%;
  position: fixed;
  background: ${colors.text.normal};
`;

const StyledNavigation = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const ResponsiveArrow = styled(Arrow)`
  transform: ${(props) => (props.inverted ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

export const Navigation = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <NavigationWrapper>
      <StyledNavigation>
        <NavigationItemContainer>
          <Link to="/dashboard">
            <Logo />
          </Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/all-records">All Records</Link>
        </NavigationItemContainer>
        <NavigationItemContainer>
          <ButtonWithIcon
            icon={<PlusIcon />}
            buttonText={'ADD'}
            onClick={() => history.push('/add-record')}
          />
          <NavigationItem
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon />
              <Helper>{user.username}</Helper>
              <ResponsiveArrow inverted={userDropdownOpen} />
            </div>
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
    </NavigationWrapper>
  );
};
