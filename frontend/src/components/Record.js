import React from 'react';
import styled from 'styled-components';
import { H5, Paragraph, Helper } from './Fonts';
import DefaultCover from '../assets/default-cover.png';

const RecordWrapper = styled.div`
  padding: .5rem;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.4);
  }
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

const RecordInfoText = styled(Paragraph)`
  margin: 0 1rem 0 0;
`;

const RecordBadge = styled.div`
  display: inline-block;
  background: #C0C0C0;
  margin: .3rem 0;
  padding: .3rem;
  border-radius: 9px;
`;

const Record = ({record}) => {
  console.log(record)
  const { album, artist, genre, storageLocation, image, yearOfRelease} = record;
  return (
    <RecordWrapper>
      <RecordArt image={image ? image : DefaultCover} />
      <RecordInfo>
        <H5>{album}</H5>
        <RecordInfoText>{artist} {yearOfRelease && `(${yearOfRelease})`}</RecordInfoText>
        {genre && 
          <RecordBadge>
            <Helper>{genre}</Helper>
          </RecordBadge>
        }
        
      </RecordInfo>
    </RecordWrapper>
  )
}

export default Record;