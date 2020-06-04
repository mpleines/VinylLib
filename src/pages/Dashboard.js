import React from "react";
import { Title, Paragraph } from "../components/Fonts";
import { Divider } from "../components/Divider";
import { PrimaryButton } from "../components/Buttons";

export const Dashboard = () => {
  const styles = {
    dashboard: {
      padding: "2rem",
    },
  };
  return (
    <div style={styles.dashboard}>
      <Title>Welcome back, Lora!</Title>
      <Paragraph>
        You currently don´t have any Records stored. Click ‘Add Record’ to add a
        new Record.
      </Paragraph>
      <PrimaryButton>Add Record</PrimaryButton>
    </div>
  );
};
