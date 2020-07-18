import styled from 'styled-components';
import { colors } from '../utils/colors';

const Banner = styled.div`
  background: ${colors.text.normal};
  filter: saturate(10%);
  padding: 0.2em 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Banner;
