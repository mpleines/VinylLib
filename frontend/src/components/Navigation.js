import React from 'react';
import { Divider } from './Divider';
import { PrimaryButton } from './Buttons';
import { ReactComponent as LpIcon } from '../icons/lp.svg';
import { ReactComponent as UserIcon } from '../icons/user.svg';
import { Link } from './Link';
import { useHistory } from 'react-router-dom';
import { colors } from '../utils/colors';

export const Navigation = () => {
  const history = useHistory();
  const styles = {
    navigation: {
      padding: '.5rem 2rem',
      background: colors.primary['100'],
    },
  };

  return (
    <div style={styles.navigation}>
      <Divider alignItems="center">
        <Divider alignItems="center" flex="0 0 auto" margin="0 0 0 1rem">
          <LpIcon />
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/all-records">All Records</Link>
        </Divider>
        <Divider
          alignItems="center"
          justifyContent="flex-end"
          flex="0 0 auto"
          margin="0 0 0 1rem"
        >
          <PrimaryButton onClick={() => history.push('/add-record')}>
            Add Record
          </PrimaryButton>
          <Link to="/settings">
            <UserIcon />
          </Link>
        </Divider>
      </Divider>
    </div>
  );
};
