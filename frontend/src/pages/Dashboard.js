import React, { useContext, useEffect, useState } from 'react';
import { Title, Paragraph } from '../components/Fonts';
import { Divider } from '../components/Divider';
import { PrimaryButton } from '../components/Buttons';
import LoadingSpinner from '../components/LoadingSpinner';
import Margin from '../components/Margin';
import { ReactComponent as WomanListening } from '../icons/woman-listening.svg';
import { Page } from '../components/Page';
import { useHistory } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { getRecordCount, getLastAddedRecord } from '../ApiService/ApiService';
import Row from '../components/Row';
import { DashboardItem } from '../components/DashboardItem';

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const [recordCount, setRecordCount] = useState(0);
  const [lastAdded, setLastAdded] = useState({});
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function countRecords() {
      setLoading(true);
      try {
        const recordCount = await getRecordCount(JSON.stringify(user));
        setRecordCount(recordCount);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    countRecords();
  }, [setRecordCount, user]);

  useEffect(() => {
    async function getLastAdded() {
      try {
        const [lastAddedRecord] = await getLastAddedRecord(
          JSON.stringify(user),
        );
        setLastAdded(lastAddedRecord);
      } catch (err) {
        console.log(err);
      }
    }
    getLastAdded();
  }, [user]);

  return (
    <Page>
      <Title color="white" noMargin>
        Welcome back, {user.username}!
      </Title>
      {loading && <LoadingSpinner />}
      {!loading && recordCount < 1 && (
        <>
          <Paragraph>
            You currently don´t have any Records stored. Click ‘Add Record’ to
            add a new Record.
          </Paragraph>
          <PrimaryButton onClick={() => history.push('/add-record')}>
            Add Record
          </PrimaryButton>
          <Divider justifyContent="flex-end">
            <WomanListening />
          </Divider>
        </>
      )}
      <Margin margin={'3em'} />
      {!loading && recordCount >= 1 && (
        <Row>
          <DashboardItem title="Records stored" linkTo="/all-records">
            <span>{recordCount}</span>
          </DashboardItem>
          <DashboardItem
            title="Last added"
            subTitle={lastAdded.artist}
            linkTo={{
              pathname: '/record-details',
              state: { record: lastAdded },
            }}
          >
            {lastAdded.album}
          </DashboardItem>
          <DashboardItem title="Favourite Genre">Jazz</DashboardItem>
        </Row>
      )}
    </Page>
  );
};
