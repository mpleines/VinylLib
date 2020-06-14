import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";
import { typeScale } from "../utils/typography";

const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  border: 2px solid ${colors.text.normal};
  border-radius: 2px;
  font-size: ${typeScale.paragraph};
  color: ${colors.text.normal};

  &:focus {
    outline: 2px solid ${colors.primary["400"]};
  }
`;

const StyledOption = styled.option`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  border: 2px solid ${colors.text.normal};
`;

export const Select = ({ name, options, value, onChange }) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      {options.map((option) => (
        <StyledOption value={option}>{option}</StyledOption>
      ))}
    </StyledSelect>
  );
};