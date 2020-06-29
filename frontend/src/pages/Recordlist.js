import React, { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { Heading } from "../components/Fonts";
import Record from '../components/Record';
import { getRecords } from '../ApiService/ApiService';

const RecordList = () => {
  const [showLoading, setShowLoading] = useState(true);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords()
      .then(records => setRecords(records))
      .then(() => setShowLoading(false))
      .catch(err => console.log(err));
  }, []);
  
  return (
    <Page>
      <Heading>All Records</Heading>
      {showLoading && <span>Loading...</span>}
      {(!showLoading && records.length === 0) && <span>You currently don´t have any records stored</span>}
      {!showLoading && records.map(record => 
        <Record record={record}/>
      )}
    </Page>
  );
};

export default RecordList;
