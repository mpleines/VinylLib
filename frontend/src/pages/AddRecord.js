import React, { useState, useEffect, useContext, useRef } from 'react';
import { Page } from '../components/Page';
import { Heading, Paragraph } from '../components/Fonts';
import { TextInput } from '../components/InputFields';
import { FormGroup } from '../components/FormGroup';
import { PrimaryButton, ButtonWithIcon } from '../components/Buttons';
import { Form } from '../components/Form';
import { Select } from '../components/Select';
import { getYears } from '../utils/helpers';
import { postRecord, getGenres } from '../ApiService/ApiService';
import LoadingSpinner from '../components/LoadingSpinner';
import { toasty } from '../components/Toast';
import { required } from '../utils/validators';
import UserContext from '../contexts/UserContext';
import { ReactComponent as PlusIcon } from '../icons/plus.svg';

const initialErrors = { artistError: '', albumError: '' };

export const AddRecord = () => {
  const { user } = useContext(UserContext);
  const [errors, setErrors] = useState(initialErrors);
  const [isLoading, setIsLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const years = getYears().reverse();

  const defaultRecord = useRef({ username: user.username });

  const [record, setRecord] = useState({
    username: defaultRecord.current.username,
  });

  useEffect(() => {
    async function fetchGenres() {
      try {
        const genres = await getGenres();
        setGenres(genres);
      } catch (err) {
        console.log(err);
      }
    }
    fetchGenres();
  }, [setGenres]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setRecord({ ...record, [name]: value });
  };

  const validate = () => {
    const artistError = required(record.artist);
    const albumError = required(record.album);
    setErrors({ ...errors, artistError, albumError });

    return !(artistError || albumError);
  };

  const addRecord = async () => {
    const isValid = validate();
    if (!isValid) {
      return;
    }
    try {
      setIsLoading(true);
      await postRecord(record);
      toasty(
        `added ${record.album} by ${record.artist} to your collection`,
        3000,
      );
      setRecord(defaultRecord.current);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <Heading>Add a new Record</Heading>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Form
          actions={[
            <ButtonWithIcon
              icon={<PlusIcon />}
              buttonText={'Add Record'}
              onClick={addRecord}
            />,
          ]}
        >
          <Paragraph>
            Add all the information for your new Record and click 'Add Record'
            to save it.
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
              options={years.map((year) => ({ label: year, value: year }))}
              value={record.yearOfRelease}
              onChange={handleInputChange}
              placeholderOption={'Select One'}
            />
          </FormGroup>
          <FormGroup label="Genre">
            <Select
              name="genre"
              options={genres.map((genre) => ({ label: genre.name, value: genre.name }))}
              value={record.genre}
              onChange={handleInputChange}
              placeholderOption={'Select One'}
            />
          </FormGroup>
          <FormGroup label="Storage Location">
            <TextInput name="storageLocation" onChange={handleInputChange} />
          </FormGroup>
        </Form>
      )}
    </Page>
  );
};

export default AddRecord;
