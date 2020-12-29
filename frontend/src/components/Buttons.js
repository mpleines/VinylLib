import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { typeScale } from '../utils/typography';

const Button = styled.button`
  border: none;
  background: none;
  border-radius: 5px;
  min-width: 100px;
  font-size: ${typeScale.paragraph};
  padding: 12px 24px;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  color: ${colors.text.inverted};
  background-color: ${colors.primary['500']};

  &:hover {
    background-color: #ff476c;
  }
  &:active {
    outline: 2px solid ${colors.primary['100']};
    outline-offset: 1px;
  }
  &:focus {
    outline: 2px solid ${colors.primary['500']};
    outline-offset: 1px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.neutral['300']};
    color: ${colors.text.normal};
  }
`;

export const ErrorButton = styled(PrimaryButton)`
  background-color: #ff6961;

  &:hover {
    background-color: #ff362b;
  }
`;

export const SecondaryButton = styled(Button)`
  color: ${colors.text.normal};
  background-color: ${colors.text.inverted};
  padding: 10px 22px;

  &:hover {
    color: ${colors.text.inverted};
    background-color: ${colors.primary['500']};
  }
  &:active {
    outline: 2px solid ${colors.primary['100']};
    outline-offset: 1px;
  }
  &:focus {
    outline: 2px solid ${colors.primary['500']};
    outline-offset: 1px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.neutral['300']};
    color: ${colors.text.normal};
  }
`;

export const BigButton = styled(PrimaryButton)`
  padding: 24px 48px;
  font-size: ${typeScale.header3};
`;

export const BigPrimaryButton = styled(BigButton)`
  &:hover {
    box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.4);
  }
  &:active {
    outline: 2px solid ${colors.primary['100']};
    outline-offset: 1px;
  }
  &:focus {
    outline: 2px solid ${colors.primary['500']};
    outline-offset: 1px;
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${colors.neutral['300']};
    color: ${colors.text.normal};
  }
`;

export const SmallPrimaryButton = styled(PrimaryButton)`
  padding: 6px 12px;
`;

const WithIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WithIconText = styled.span`
  margin-left: 0.3em;
`;

export const ButtonWithIcon = ({ icon, buttonText, onClick }) => {
  return (
    <SmallPrimaryButton onClick={onClick}>
      <WithIconWrapper>
        {icon}
        <WithIconText>{buttonText}</WithIconText>
      </WithIconWrapper>
    </SmallPrimaryButton>
  );
};
