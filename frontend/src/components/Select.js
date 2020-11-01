import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { typeScale } from '../utils/typography';

const StyledSelect = styled.select`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  border: 2px solid ${colors.text.normal};
  border-radius: 5px;
  font-size: ${typeScale.paragraph};
  color: ${colors.text.normal};

  &:focus {
    border: 2px solid ${colors.primary['500']};
  }
`;

const StyledOption = styled.option`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 12px;
  border: 2px solid ${colors.text.normal};
`;

export const Select = ({
  name,
  options,
  placeholderOption,
  value,
  onChange,
}) => {
  return (
    <StyledSelect name={name} value={value} onChange={onChange}>
      {placeholderOption && (
        <StyledOption value={''} disabled selected>
          Select one
        </StyledOption>
      )}
      {options &&
        options.map((option) => (
          <StyledOption value={option.value}>{option.label}</StyledOption>
        ))}
    </StyledSelect>
  );
};
