import React, { useEffect, useState, useContext } from 'react';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import Record from '../components/Record';
import {
  getRecords,
  emptyResponseHandler,
  getFilteredRecords,
} from '../ApiService/ApiService';
import LoadingSpinner from '../components/LoadingSpinner';
import UserContext from '../contexts/UserContext';
import { Paragraph } from '../components/Fonts';
import { TextInput } from '../components/InputFields';
import { Divider } from '../components/Divider';
import Margin from '../components/Margin';
import Searchbar from '../components/Searchbar';

const RecordList = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const { user } = useContext(UserContext);
  const [filterValue, setFilterValue] = useState('');

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
  }, [setRecords, user]);

  const handleFilter = async (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    setShowLoading(true);
    try {
      const records = await emptyResponseHandler(getFilteredRecords, {
        user: user,
        filter: filterValue,
      });
      setRecords(records);
      setShowLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <Divider alignItems="center">
        <Heading noMargin alignItems="center">
          All Records
        </Heading>
        <Searchbar
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          onKeyDown={(e) => handleFilter(e)}
          placeholder="Search album..."
        />
      </Divider>
      <Margin />
      {showLoading && <LoadingSpinner />}
      {!showLoading && records.length === 0 && (
        <Paragraph>You currently don´t have any records stored</Paragraph>
      )}
      {!showLoading && records.map((record) => <Record record={record} />)}
    </Page>
  );
};

export default RecordList;
