import React from 'react';
import styled from 'styled-components';
import { Page } from '../components/Page';
import { Heading, H5 } from '../components/Fonts';
import { Label } from '../components/InputFields';
import {Table, TableData, TableDataContent} from '../components/Table';
import { ErrorButton } from '../components/Buttons';

const Actions = styled.div`
  margin-top: 2rem;
`;

const RecordDetails = (props) => {
  const {record} = props.location.state;

  return (
    <Page>
      <Heading>{record.album}</Heading>
      <Table data={[
        {label: 'Album',value: record.album},
        {label: 'Year of Release', value: record.yearOfRelease},
        {label: 'Genre', value: record.genre},
        {label: 'Stored at', value: record.storageLocation}
      ]}/>
      <Actions>
        <ErrorButton>Delete Record</ErrorButton>
      </Actions>
    </Page>
  )
}

export default RecordDetails;