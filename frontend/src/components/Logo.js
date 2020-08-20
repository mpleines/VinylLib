import React from 'react';
import { ReactComponent as LpIcon } from '../icons/lp.svg';
import { H4 } from './Fonts';

const Logo = () => {
  return (
    <div>
      <LpIcon style={{ verticalAlign: 'middle', display: 'inline-block' }} />
      <H4
        style={{
          margin: '1em .2em',
          verticalAlign: 'middle',
          display: 'inline-block',
        }}
      >
        VinylLib
      </H4>
    </div>
  );
};

export default Logo;
