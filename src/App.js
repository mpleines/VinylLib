import React from "react";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { TextInput, Label } from "./components/InputFields";
import { Column } from "./components/Column";
import { Row } from "./components/Row";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <h1>Buttons</h1>
      <h3>Primary Button</h3>
      <PrimaryButton>Sign Up</PrimaryButton>
      <h3>Secondary Button</h3>
      <SecondaryButton>Log In</SecondaryButton>
      <h1>Inputs</h1>
      <TextInput></TextInput>
      <h1>Columns</h1>
      <Column>
        <Label>Username</Label>
        <TextInput />
      </Column>
      <h1>Rows</h1>
      <Row padding={"5px"}>
        <Column margin={"0 5px 0 0"}>
          <Label>Street</Label>
          <TextInput />
        </Column>
        <Column margin={"0 5px 0 0"}>
          <Label>Number</Label>
          <TextInput />
        </Column>
      </Row>
      <h1>Cards</h1>
      <Card>
        <h1>Hello this is Card</h1>
        <p>Very nice to meet you</p>
        <Row>
          <PrimaryButton>clicky me</PrimaryButton>
        </Row>
      </Card>
    </div>
  );
}

export default App;
