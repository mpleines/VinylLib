import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { Helper, H5 } from './Fonts';

const StyledDropdown = styled.ul`
  list-style: none;
  padding: 0.2em;
  border-radius: 5px;
  color: ${colors.text.normal};
  background-color: ${colors.text.inverted};
  min-width: 250px;
  position: absolute;
  top: 4em;
  transform: translateX(-80%);
`;

const StyledDropdownItem = styled.div`
  padding: 0.7em;
  border-radius: 5px;

  &:hover {
    background: ${colors.neutral['300']};
  }
`;

const StyledDropdownTitle = styled(H5)`
  margin-left: 0.3em;
`;

export const Dropdown = ({ children, isOpen, title }) => {
  if (!isOpen) return null;

  return (
    <StyledDropdown>
      <StyledDropdownTitle black>{title}</StyledDropdownTitle>
      {children}
    </StyledDropdown>
  );
};

export const DropdownItem = ({ children, onClick }) => {
  return (
    <StyledDropdownItem role="button" onClick={onClick}>
      {children}
    </StyledDropdownItem>
  );
};
