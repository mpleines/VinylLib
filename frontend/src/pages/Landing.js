import React from 'react';
import styled from 'styled-components';
import {colors} from '../utils/colors';
import { Title, Paragraph, H3 } from '../components/Fonts';
import { TertiaryButton, SecondaryButton } from '../components/Buttons';
import { useHistory } from "react-router-dom";
import Margin from '../components/Margin';

const LandingPage = styled.div`
  height: 100vh;
  background: ${colors.background};
`;

const Center = styled.div`
  margin-top: 10em;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Banner = styled.div`
  background: ${colors.text.normal};
  filter: saturate(50%);
  padding: .2em 1.3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Landing = () => {
  const history = useHistory();
  return (
    <LandingPage>
      <Banner>
        <H3 white>VinylLib </H3>
        <SecondaryButton onClick={() => history.push('/login')}>Login</SecondaryButton>
      </Banner>
      <Center>
        <Title white noMargin>Your records, ordered.</Title>
        <Paragraph white>Organize, categorize & store all of your records. Lifetime free.</Paragraph>
        <Margin margin={'3em'}/>
        <TertiaryButton onClick={() => history.push('/register')}>Register now for free</TertiaryButton>
      </Center>
    </LandingPage>
  )
}

export default Landing;