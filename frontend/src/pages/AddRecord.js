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
import LoadingSpinner from '../components/LoadingSpinner';
import { toasty } from '../components/Toast';
import { required } from '../utils/validators';

const initialErrors = {artistError: '', albumError: ''};

export const AddRecord = () => {
  const [errors, setErrors] = useState(initialErrors);
  const [isLoading, setIsLoading] = useState(false);
  const fakeOptions = ["Rock", "Metal", "House", "Alternative", "Hip Hop"];
  const years = getYears();

  const [record, setRecord] = useState({});

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRecord({ ...record, [name]: value });
  };

  const validate = () => {
    const artistError = required(record.artist);
    const albumError = required(record.album);
    setErrors({...errors, artistError, albumError});

    if(artistError || albumError) {
      return false;
    }
    
    return true;
  }

  const addRecord = async () => {
    const isValid = validate();
    if(!isValid) {
      return;
    }
    try {
      setIsLoading(true);
      await postRecord(record);
      toasty(`added ${record.album} by ${record.artist} to your collection`, 3000);
      setRecord({});
      setIsLoading(false) ;
    } catch(err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <Heading>Add a new Record</Heading>
      {isLoading ? <LoadingSpinner/> : 
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
          <FormGroup label="Artist" error={errors.artistError}>
            <TextInput name="artist" onChange={handleInputChange} />
          </FormGroup>
          <FormGroup label="Album" error={errors.albumError}>
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
      }
    </Page>
  );
};

export default AddRecord;
