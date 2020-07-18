import React, { useEffect, useState, useContext } from 'react';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import Record from '../components/Record';
import { getRecords, emptyResponseHandler } from '../ApiService/ApiService';
import LoadingSpinner from '../components/LoadingSpinner';
import UserContext from '../contexts/UserContext';

const RecordList = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function fetchRecords() {
      try {
        const records = await emptyResponseHandler(getRecords, user);
        setRecords(records);
        setShowLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecords();
  }, [setRecords]);

  return (
    <Page>
      <Heading>All Records</Heading>
      {showLoading && <LoadingSpinner />}
      {!showLoading && records.length === 0 && (
        <span>You currently don´t have any records stored</span>
      )}
      {!showLoading && records.map((record) => <Record record={record} />)}
    </Page>
  );
};

export default RecordList;
