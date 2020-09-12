import styled from 'styled-components';
import { typeScale } from '../utils/typography';
import { colors } from '../utils/colors';

export const Title = styled.h1`
  color: ${(props) => (props.color ? props.color : colors.text.normal)};
  font-size: ${typeScale.header1};
  margin: ${(props) => (props.noMargin ? 0 : null)};
`;

export const Heading = styled.h2`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  margin: ${(props) => (props.noMargin ? 0 : '0 0 2rem 0')};
  font-size: ${typeScale.header2};
`;

export const H3 = styled.h3`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  margin: ${(props) => (props.noMargin ? 0 : '0 0 2rem 0')};
  font-size: ${typeScale.header3};
`;

export const H4 = styled.h4`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  font-size: ${typeScale.header4};
`;

export const H5 = styled.h5`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  display: inline-block;
  margin: 0.2rem 0 0.7rem 0;
  font-size: ${typeScale.header5};
`;

export const Paragraph = styled.p`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  font-size: ${typeScale.paragraph};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
`;

export const Helper = styled.p`
  color: ${(props) =>
    props.black ? colors.text.normal : colors.text.inverted};
  margin: 0.5em;
  font-size: ${typeScale.helper};
`;
