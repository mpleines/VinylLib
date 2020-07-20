import React, { useContext } from 'react';
import { Title, Paragraph } from '../components/Fonts';
import { Divider } from '../components/Divider';
import { PrimaryButton } from '../components/Buttons';
import { ReactComponent as WomanListening } from '../icons/woman-listening.svg';
import { Page } from '../components/Page';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  return (
    <Page>
      <Title noMargin>Welcome back, {user.username}!</Title>
      <Paragraph>
        You currently don´t have any Records stored. Click ‘Add Record’ to add a
        new Record.
      </Paragraph>
      <PrimaryButton onClick={() => history.push('/add-record')}>
        Add Record
      </PrimaryButton>
      <Divider justifyContent="flex-end">
        <WomanListening />
      </Divider>
    </Page>
  );
};
