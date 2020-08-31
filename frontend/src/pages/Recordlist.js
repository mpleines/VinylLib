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
import Margin from '../components/Margin';
import Searchbar from '../components/Searchbar';
import { Select } from '../components/Select';
import { orderBy } from '../utils/helpers';
import { Label } from '../components/InputFields';

const INITIAL_SORT_OPTION = 'created';

const sortOptions = [
  { value: 'created', label: 'Created' },
  { value: 'artist', label: 'Artist' },
  { value: 'album', label: 'Album' },
  { value: 'yearOfRelease', label: 'Year of Release' },
  { value: 'genre', label: 'Genre' },
  { value: 'storageLocation', label: 'Storage Location' },
];

const RecordList = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [records, setRecords] = useState([]);
  const { user } = useContext(UserContext);
  const [filterText, setFilterText] = useState('');
  const [filterValue, setFilterValue] = useState('');

  const [orderOption, setOrderOption] = useState(INITIAL_SORT_OPTION);
  const [reverseOrder, setReverseOrder] = useState(true);

  useEffect(() => {
    async function fetchRecords() {
      console.log('called');
      try {
        const records = await emptyResponseHandler(getFilteredRecords, {
          user: user,
          filter: filterValue,
        });
        // order records by created date
        const ordered = orderBy(records, orderOption, reverseOrder);
        setRecords(ordered);
        setShowLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
    fetchRecords();
  }, [setRecords, user, orderOption, reverseOrder, filterValue]);

  const handleFilter = async (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    setFilterValue(filterText);
  };

  return (
    <Page>
      <Heading noMargin alignItems="center">
        All Records
      </Heading>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '0 0 150px' }}>
          <Label>Order By</Label>
          <Select
            options={sortOptions}
            onChange={(e) => setOrderOption(e.target.value)}
          />
        </div>
        <div style={{ marginRight: '.5em' }} />
        <div style={{ flex: '0 0 250px' }}>
          <Label>Search Album</Label>
          <Searchbar
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            onKeyDown={(e) => handleFilter(e)}
            placeholder="Search album..."
          />
        </div>
      </div>
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
