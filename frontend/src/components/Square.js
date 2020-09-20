import styled from 'styled-components';

const Square = styled.div`
  flex: 1 0 250px;
  max-width: 250px;
  min-height: 150px;
  background: white;
  display: grid;
  grid-row: span 3;
  grid-template-rows: 1fr auto 0.5fr;
  grid-template-rows: subgrid;
  grid-row-gap: 0;
  text-align: center;
  border-radius: 5px;
  padding: 1.5em;
  word-break: break-all;
  &:hover {
    transition: 0.2s;
    opacity: 90%;
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.2);
  }
`;

export default Square;
