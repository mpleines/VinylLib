import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const FormActions = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledForm = styled.form`
  border-radius: 5px;
  background: ${colors.text.normal};
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  width: 450px;
`;

export const Form = ({ children, actions }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {children}
      <FormActions>{actions.map((action) => action)}</FormActions>
    </StyledForm>
  );
};
