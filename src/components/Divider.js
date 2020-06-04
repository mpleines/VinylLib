import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
  > * {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    flex: ${(props) => (props.flex ? props.flex : 1)};
    &:not(:first-child) {
      margin-left: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;
