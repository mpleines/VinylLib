import React from "react";
import { Label } from "./InputFields";
import styled from "styled-components";
import ErrorMessage from './ErrorMessage';

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = ({ label, children, error }) => {
  return (
    <FormGroupWrapper>
      <Label>{label} {error && <ErrorMessage>{error}</ErrorMessage>}</Label>
      {children}
    </FormGroupWrapper>
  );
};
