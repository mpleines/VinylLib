import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import {Table } from '../components/Table';
import { ErrorButton } from '../components/Buttons';
import { deleteRecord } from '../ApiService/ApiService';

const Actions = styled.div`
  margin-top: 2rem;
`;

const RecordDetails = (props) => {
  const {record} = props.location.state;
  console.log(record)

  const handleDelete = () => {
    deleteRecord(record._id);
  }

  return (
    <Page>
      <Heading>{record.album}</Heading>
      <Table data={[
        {label: 'Artist',value: record.artist},
        {label: 'Year of Release', value: record.yearOfRelease},
        {label: 'Genre', value: record.genre},
        {label: 'Stored at', value: record.storageLocation}
      ]}/>
      <Actions>
        <ErrorButton onClick={handleDelete}>Delete Record</ErrorButton>
      </Actions>
    </Page>
  )
}

export default RecordDetails;