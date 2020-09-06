import styled from 'styled-components';

const Row = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 300px));
  grid-gap: 1em;
`;

export default Row;
