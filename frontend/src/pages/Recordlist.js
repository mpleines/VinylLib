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
import styled from 'styled-components';
import { FormGroup } from '../components/FormGroup';

const INITIAL_SORT_OPTION = 'created';

const sortOptions = [
  { value: 'created', label: 'Created' },
  { value: 'artist', label: 'Artist' },
  { value: 'album', label: 'Album' },
  { value: 'yearOfRelease', label: 'Year of Release' },
  { value: 'genre', label: 'Genre' },
  { value: 'storageLocation', label: 'Storage Location' },
];

const ControlWrapper = styled.div`
  @media (min-width: 650px) {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
`;

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
      <ControlWrapper>
        <FormGroup label="Order By" width={'150px'}>
          <Select
            options={sortOptions}
            onChange={(e) => setOrderOption(e.target.value)}
          />
        </FormGroup>
        <div style={{ marginRight: '.5em' }} />
        <FormGroup label="Search Album" width={'250px'}>
          <Searchbar
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            onKeyDown={(e) => handleFilter(e)}
            placeholder="Search album..."
          />
        </FormGroup>
      </ControlWrapper>
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
