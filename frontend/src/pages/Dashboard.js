import React from "react";
import { Title, Paragraph } from "../components/Fonts";
import { Divider } from "../components/Divider";
import { PrimaryButton } from "../components/Buttons";
import { ReactComponent as HappyBird } from "../icons/happy-bird.svg";
import { Page } from "../components/Page";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
  const history = useHistory();

  return (
    <Page>
      <Title>Welcome back, Lora!</Title>
      <Paragraph>
        You currently don´t have any Records stored. Click ‘Add Record’ to add a
        new Record.
      </Paragraph>
      <PrimaryButton onClick={() => history.push("/add-record")}>
        Add Record
      </PrimaryButton>
      <Divider justifyContent="flex-end">
        <HappyBird />
      </Divider>
    </Page>
  );
};
