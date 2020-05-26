import styled from "styled-components";
import { colors } from "../utils/colors";
import { typeScale } from "../utils/typography";

export const Label = styled.label`
  color: ${colors.text.normal};
  font-size: ${typeScale.paragraph};
`;

export const TextInput = styled.input`
  padding: 12px 12px;
  border: none;
  border-radius: 2px;
  font-size: ${typeScale.paragraph};
  color: ${colors.text.normal};

  &:focus {
    outline: 2px solid ${colors.primary["400"]};
  }
`;
