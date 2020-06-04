import React from "react";
import styled from "styled-components";

export const Divider = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * {
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    flex: 1;
    &:not(:first-child) {
      margin-left: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;
