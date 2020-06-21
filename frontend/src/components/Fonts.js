import styled from "styled-components";
import { typeScale } from "../utils/typography";

export const Title = styled.h1`
  font-size: ${typeScale.header1};
`;

export const Heading = styled.h2`
  margin: .5rem 0 2rem 0;
  font-size: ${typeScale.header2};
`;

export const H3 = styled.h3`
  font-size: ${typeScale.header3}; 
`;

export const H4 = styled.h4`
  font-size: ${typeScale.header4};
`;

export const H5 = styled.h5`
  display: inline-block;
  margin: .2rem 0 .7rem 0;
  font-size: ${typeScale.header5};
`;

export const Paragraph = styled.p`
  font-size: ${typeScale.paragraph};
`;

export const Helper = styled.p`
  margin: 0;
  font-size: ${typeScale.helper};
`
