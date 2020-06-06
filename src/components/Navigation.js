import React from "react";
import { Divider } from "./Divider";
import { PrimaryButton } from "./Buttons";
import { ReactComponent as LpIcon } from "../icons/lp.svg";
import { ReactComponent as UserIcon } from "../icons/user.svg";
import { Link } from "./Link";

export const Navigation = () => {
  const styles = {
    navigation: {
      padding: "1rem 2rem",
    },
  };
  return (
    <div style={styles.navigation}>
      <Divider alignItems="center">
        <Divider alignItems="center" flex="0 0 auto" margin="0 0 0 1rem">
          <LpIcon />
          <Link href="#">Dashboard</Link>
          <Link href="#">All Records</Link>
        </Divider>
        <Divider
          alignItems="center"
          justifyContent="flex-end"
          flex="0 0 auto"
          margin="0 0 0 1rem"
        >
          <PrimaryButton>Add Record</PrimaryButton>
          <UserIcon />
        </Divider>
      </Divider>
    </div>
  );
};
