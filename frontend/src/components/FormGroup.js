import React from 'react';
import { Label } from './InputFields';
import styled from 'styled-components';
import ErrorMessage from './ErrorMessage';

const FormGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const FormGroup = ({ label, children, error, width }) => {
  return (
    <FormGroupWrapper width={width}>
      <Label>
        {label} {error && <ErrorMessage>{error}</ErrorMessage>}
      </Label>
      {children}
    </FormGroupWrapper>
  );
};
