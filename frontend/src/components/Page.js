import styled from 'styled-components';
import { colors } from '../utils/colors';

export const Page = styled.div`
  padding: 0 5rem;
  margin: 0 auto;
  max-width: 900px;
`;

export const FullPage = styled.div`
  height: 100vh;
  background: ${colors.background};
`;
