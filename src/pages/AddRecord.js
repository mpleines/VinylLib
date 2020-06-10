import React from "react";
import { Page } from "../components/Page";
import { Heading, Paragraph, H5 } from "../components/Fonts";
import { Divider } from "../components/Divider";
import { TextInput } from "../components/InputFields";
import { FormGroup } from "../components/FormGroup";
import { PrimaryButton } from "../components/Buttons";
import { Form } from "../components/Form";
import { Select } from "../components/Select";

export const AddRecord = () => {
  const fakeOptions = ["Rock", "Metal", "House", "Alternative", "Hip Hop"];

  const addRecord = () => {};

  return (
    <Page>
      <Heading>Add a new Record</Heading>
      <Form
        actions={[
          <PrimaryButton margin="5rem 0 1rem 0" justifyContent="flex-end">
            Add Record
          </PrimaryButton>,
        ]}
        onSubmit={addRecord}
      >
        <H5>
          Add all the information for your new Record and click 'Add Record' to
          save it.
        </H5>
        <FormGroup label="Artist">
          <TextInput />
        </FormGroup>
        <FormGroup label="Album">
          <TextInput />
        </FormGroup>
        <FormGroup label="Year of Release">
          <TextInput />
        </FormGroup>
        <FormGroup label="Genre">
          <Select options={fakeOptions} />
        </FormGroup>
        <Divider></Divider>
      </Form>
    </Page>
  );
};

export default AddRecord;
