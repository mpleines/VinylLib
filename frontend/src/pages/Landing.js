import React from 'react';
import styled from 'styled-components';
import { colors } from '../utils/colors';
import { Title, Paragraph, H3 } from '../components/Fonts';
import { BigPrimaryButton, SecondaryButton } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import Margin from '../components/Margin';
import Banner from '../components/Banner';
import Center from '../components/Center';
import { ReactComponent as LpIcon } from '../icons/lp.svg';

const LandingPage = styled.div`
  height: 100vh;
  background: ${colors.background};
`;

const Landing = () => {
  const history = useHistory();
  return (
    <LandingPage>
      <Banner>
        <SecondaryButton onClick={() => history.push('/login')}>
          Login
        </SecondaryButton>
      </Banner>
      <Center>
        <Margin margin={'10em'} />
        <Title noMargin>Your records, ordered.</Title>
        <Paragraph>
          Organize, categorize & store all of your records. Lifetime free.
        </Paragraph>
        <Margin margin={'3em'} />
        <BigPrimaryButton onClick={() => history.push('/register')}>
          Register now for free
        </BigPrimaryButton>
      </Center>
    </LandingPage>
  );
};

export default Landing;
