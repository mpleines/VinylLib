import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Paragraph } from '../components/Fonts';
import { BigPrimaryButton, SecondaryButton } from '../components/Buttons';
import { useHistory } from 'react-router-dom';
import Margin from '../components/Margin';
import Banner from '../components/Banner';

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

const Landing = () => {
  const history = useHistory();
  return (
    <LandingPage>
      <Banner withLogo>
        <SecondaryButton onClick={() => history.push('/login')}>
          Login
        </SecondaryButton>
      </Banner>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
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
        </div>
      </div>
    </LandingPage>
  );
};

export default Landing;
