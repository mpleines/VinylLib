import React from "react";
import { PrimaryButton, SecondaryButton } from "./components/Buttons";
import { TextInput } from "./components/InputFields";
import { Card } from "./components/Card";
import { Divider } from "./components/Divider";

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
      <h1>Cards</h1>
      <Card>
        <h1>Hello this is Card</h1>
        <p>Very nice to meet you</p>
        <PrimaryButton>clicky me</PrimaryButton>
      </Card>
      <h1>Columns</h1>
      <Divider>
        <PrimaryButton>Hello</PrimaryButton>
        <PrimaryButton>Bye</PrimaryButton>
      </Divider>
      <Divider>
        <Card>
          <h1>Hello this is Card</h1>
          <p>Very nice to meet you</p>
          <PrimaryButton>clicky me</PrimaryButton>
        </Card>
        <Card>
          <h1>Hello this is Card</h1>
          <p>Very nice to meet you</p>
          <PrimaryButton>clicky me</PrimaryButton>
        </Card>
        <Card>
          <h1>Hello this is Card</h1>
          <p>Very nice to meet you</p>
          <PrimaryButton>clicky me</PrimaryButton>
        </Card>
      </Divider>
    </div>
  );
}

export default App;
