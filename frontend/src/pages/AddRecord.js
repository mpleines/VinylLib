import React, { useState, useEffect } from "react";
import { Page } from "../components/Page";
import { Heading, Paragraph, H5 } from "../components/Fonts";
import { Divider } from "../components/Divider";
import { TextInput } from "../components/InputFields";
import { FormGroup } from "../components/FormGroup";
import { PrimaryButton } from "../components/Buttons";
import { Form } from "../components/Form";
import { Select } from "../components/Select";
import { getYears } from "../utils/helpers";
import { postRecord } from '../ApiService/ApiService';

export const AddRecord = () => {
  const fakeOptions = ["Rock", "Metal", "House", "Alternative", "Hip Hop"];
  const years = getYears();

  const [record, setRecord] = useState({});

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRecord({ ...record, [name]: value });
  };

  const addRecord = () => {
    postRecord(record);
  };

  return (
    <Page>
      <Heading>Add a new Record</Heading>
      <Form
        actions={[
          <PrimaryButton
            type="submit"
            margin="5rem 0 1rem 0"
            justifyContent="flex-end"
            onClick={addRecord}
          >
            Add Record
          </PrimaryButton>,
        ]}
      >
        <Paragraph>
          Add all the information for your new Record and click 'Add Record' to
          save it.
        </Paragraph>
        <FormGroup label="Artist">
          <TextInput name="artist" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup label="Album">
          <TextInput name="album" onChange={handleInputChange} />
        </FormGroup>
        <FormGroup label="Year of Release">
          <Select
            name="yearOfRelease"
            options={years}
            value={record.yearOfRelease}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup label="Genre">
          <Select
            name="genre"
            options={fakeOptions}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup label="Storage Location">
          <TextInput name="storageLocation" onChange={handleInputChange} />
        </FormGroup>
      </Form>
    </Page>
  );
};

export default AddRecord;
