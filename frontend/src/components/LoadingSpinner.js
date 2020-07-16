import styled, {keyframes} from 'styled-components';
import {colors} from '../utils/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default styled.div`
  width: 64px;
  height: 64px;
  border: 5px solid;
  border-color: ${colors.text.lightgrey};
  border-top-color: ${colors.primary["400"]};
  border-radius: 50%;
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
`;