import React from 'react';
import styled from 'styled-components';
import { H5, Paragraph, Helper } from './Fonts';
import DefaultCover from '../assets/default-cover.png';
import { Link } from '../components/Link';
import { colors } from '../utils/colors';

const RecordWrapper = styled.div`
  background: ${colors.text.inverted};
  padding: 0.5rem;
  margin: 1.5rem;
  display: flex;
  align-items: center;
  border-radius: 5px;
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

const RecordArt = ({ image }) => {
  return (
    <RecordImageWrapper>
      <RecordImage src={image} />
    </RecordImageWrapper>
  );
};

const RecordInfo = styled.div`
  margin-left: 1.5rem;
`;

const RecordInfoText = styled(Paragraph)`
  margin: 0 1rem 0 0;
`;

const RecordBadge = styled.div`
  display: inline-block;
  background: ${colors.primary['500']};
  margin: 0.3rem 0.3rem 0 0;
  padding: 0.3rem;
  border-radius: 9px;
`;

const RecordTitle = styled(H5)`
  &:hover {
    color: ${colors.primary['500']};
  }
`;

const Record = ({ record }) => {
  const {
    album,
    artist,
    genre,
    storageLocation,
    image,
    yearOfRelease,
  } = record;
  return (
    <RecordWrapper>
      <RecordArt image={image ? image : DefaultCover} />
      <RecordInfo>
        <Link to={{ pathname: '/record-details', state: { record } }}>
          <RecordTitle black>{album}</RecordTitle>
        </Link>
        <RecordInfoText black>
          {artist} {yearOfRelease && `(${yearOfRelease})`}
        </RecordInfoText>
        {genre && (
          <RecordBadge>
            <Helper>{genre}</Helper>
          </RecordBadge>
        )}
        {genre && (
          <RecordBadge>
            <Helper>{storageLocation}</Helper>
          </RecordBadge>
        )}
      </RecordInfo>
    </RecordWrapper>
  );
};

export default Record;
