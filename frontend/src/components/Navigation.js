import React, { useState, useContext, useCallback, useEffect } from 'react';
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
import { ReactComponent as Menu } from '../icons/menu.svg';
import OutsideClickHandler from 'react-outside-click-handler';

const NavigationItem = ({ children, onClick, onOutsideClick }) => (
  <OutsideClickHandler onOutsideClick={onOutsideClick}>
    <div role="button" onClick={onClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  </OutsideClickHandler>
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

export const NavigationWrapper = styled.div`
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
  flex-wrap: wrap;
`;

const ResponsiveArrow = styled(Arrow)`
  transform: ${(props) => (props.inverted ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const CollapsedNavigation = () => {
  return (
    <NavigationWrapper>
      <StyledNavigation>
        <NavigationItemContainer>
          <Link to="/dashboard">
            <Logo />
          </Link>
        </NavigationItemContainer>
        <NavigationItemContainer>
          <Menu />
        </NavigationItemContainer>
      </StyledNavigation>
    </NavigationWrapper>
  );
};

export const Navigation = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const [addMenuOpen, setAddMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      const isSmallDevice = () => window.matchMedia('(max-width: 700px)');
      setIsSmallDevice(isSmallDevice);
    });

    return () => window.removeEventListener('resize', () => null);
  }, []);

  return isSmallDevice.matches ? (
    <CollapsedNavigation />
  ) : (
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
          <NavigationItem
            onClick={() => setAddMenuOpen(!addMenuOpen)}
            onOutsideClick={() => setAddMenuOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PlusIcon />
              <Helper>Add</Helper>
              <ResponsiveArrow inverted={addMenuOpen} />
            </div>
            <Dropdown
              isOpen={addMenuOpen}
              onOutsideClick={() => setAddMenuOpen(false)}
              title={'Menu'}
            >
              <DropdownItem onClick={() => history.push('/add-record')}>
                Add Record
              </DropdownItem>
            </Dropdown>
          </NavigationItem>
          <NavigationItem
            onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            onOutsideClick={() => setUserDropdownOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <UserIcon />
              <Helper>{user.username}</Helper>
              <ResponsiveArrow inverted={userDropdownOpen} />
            </div>
            <Dropdown isOpen={userDropdownOpen} title={user.username}>
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
