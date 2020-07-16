import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "flex-start"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "null")};
  > * {
    flex: ${(props) => (props.flex ? props.flex : 1)};
    &:not(:first-child) {
      margin: ${(props) => (props.margin ? props.margin : "0.5rem 0 0 0.5rem")};
    }
  }
`;
