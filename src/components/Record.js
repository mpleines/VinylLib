import React from 'react';
import styled from 'styled-components';
import { H5, Paragraph } from '../components/Fonts';
import zappa from './zappa.jpg'

const RecordWrapper = styled.div`
  padding: .5rem;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
`;

const RecordImageWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  overflow: hidden;
`;

const RecordImage = styled.img`
  width: auto;
  height: 100%;
`;

const RecordArt = ({image}) => {
  return(
    <RecordImageWrapper>
      <RecordImage src={image} />
    </RecordImageWrapper>
  )
}

const RecordInfo = styled.div`
  margin-left: 1.5rem;
`;

const Record = ({title, description}) => {
  return (
    <RecordWrapper>
      <RecordArt image={zappa} />
      <RecordInfo>
        <H5>{title}</H5>
        <Paragraph>{description}</Paragraph>
      </RecordInfo>
    </RecordWrapper>
  )
}

export default Record;