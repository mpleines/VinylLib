import React from "react";
import styled from "styled-components";

const FormActions = styled.div`
  margin: 1rem 0 0 0;
  display: flex;
  justify-content: flex-end;
`;

const StyledForm = styled.form`
  max-width: 700px;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
  padding: 1rem;
`;

export const Form = ({ children, actions, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      {children}
      <FormActions>{actions.map((action) => action)}</FormActions>
    </StyledForm>
  );
};
