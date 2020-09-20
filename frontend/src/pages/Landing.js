import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Paragraph } from '../components/Fonts';
import { BigPrimaryButton, SecondaryButton } from '../components/Buttons';
import { Link, useHistory } from 'react-router-dom';
import Margin from '../components/Margin';
import Logo from '../components/Logo';

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const LandingPage = styled.div`
  height: 100vh;
  background: linear-gradient(-45deg, #ff6584, #6584ff, #84ff65);
  background-size: 300% 300%;
  animation: ${gradient} 8s ease infinite;
  display: flex;
  align-items: center;
`;

const BigTitle = styled.h1`
  font-size: 9em;
  color: white;
  margin: 0;
  line-height: 0.9em;
`;

const LandingBanner = styled.div`
  position: fixed;
  top: 0;
  margin: 0 auto;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const LandingBannerContent = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2em 1.3em;
`;

const Center = styled.div`
  margin: 0 auto;
`;

const MaxCenter = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
`;

const Landing = () => {
  const history = useHistory();
  return (
    <LandingPage>
      <LandingBanner>
        <LandingBannerContent>
          <Link to="/landing">
            <Logo />
          </Link>
          <SecondaryButton onClick={() => history.push('/login')}>
            Login
          </SecondaryButton>
        </LandingBannerContent>
      </LandingBanner>
      <Center>
        <MaxCenter>
          <BigTitle>Your records, ordered.</BigTitle>
          <div>
            <Margin margin={'4em'} />
            <Paragraph fontWeight="600">
              Organize, categorize & store all of your records. Lifetime free.
            </Paragraph>
            <Margin margin={'2.5em'} />
            <BigPrimaryButton onClick={() => history.push('/register')}>
              Register now for free
            </BigPrimaryButton>
          </div>
        </MaxCenter>
      </Center>
    </LandingPage>
  );
};

export default Landing;
