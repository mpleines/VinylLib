import styled from "styled-components";
import { colors } from "../utils/colors";
import { typeScale } from "../utils/typography";

export default Label = styled.label`
  color: ${colors.text.normal};
  font-size: ${typeScale.paragraph};
`;
