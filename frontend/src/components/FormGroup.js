import React from "react";
import { Label } from "./InputFields";
import styled from "styled-components";

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = ({ label, children }) => {
  return (
    <FormGroupWrapper>
      <Label>{label}</Label>
      {children}
    </FormGroupWrapper>
  );
};
