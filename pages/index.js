import React from 'react';
import Generate from './generate';
import SendCoins from './send-coins';

const Home = () => {
  return (
    <div>
      <center>
      <Generate />
      <br />
      <br />
      <SendCoins />
      </center>
    </div>
  );
};

export default Home;
