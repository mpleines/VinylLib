import React, { useState } from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { Heading } from '../components/Fonts';
import {Table } from '../components/Table';
import { ErrorButton } from '../components/Buttons';
import { deleteRecord } from '../ApiService/ApiService';
import LoadingSpinner from '../components/LoadingSpinner';
import { useHistory } from "react-router-dom";

const Actions = styled.div`
  margin-top: 2rem;
`;

const RecordDetails = (props) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const {record} = props.location.state;

  const handleDelete = async () => {
    setIsLoading(true);
    const res = await deleteRecord(record._id);
    setIsLoading(false);
    // return to record list
    history.goBack();
  }

  return (
    <Page>
      <Heading>{record.album}</Heading>
      {isLoading && <LoadingSpinner/>}
      {!isLoading &&
        <>
          <Table data={[
            {label: 'Artist',value: record.artist},
            {label: 'Year of Release', value: record.yearOfRelease},
            {label: 'Genre', value: record.genre},
            {label: 'Stored at', value: record.storageLocation}
          ]}/>
          <Actions>
            <ErrorButton onClick={handleDelete}>Delete Record</ErrorButton>
          </Actions>
        </>
      }
    </Page>
  )
}

export default RecordDetails;