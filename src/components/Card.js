import styled from "styled-components";
import { colors } from "../utils/colors";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.text.inverted};
  padding: 15px;
  min-width: 200px;
`;
