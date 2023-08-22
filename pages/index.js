import React from 'react';
import Generate from './generate';
import SendCoins from './send-coins';

const Home = () => {
  return (
    <div className="bg-gradient-to-tr from-slate-900 to-slate-700 min-h-screen flex flex-col justify-center items-center">
      <div className="w-2/6 mx-auto rounded-xl overflow-hidden shadow-sm bg-white/5 backdrop-blur-sm mb-4 hover:shadow-xl">
        <div className="px-6 py-4">
          <div className=" mb-2">
            <h1 className="text-3xl">BSC Wallet Generator</h1>
          </div>
          <Generate />
        </div>
      </div>

      <div className="w-2/6 mx-auto rounded-xl overflow-hidden shadow-sm bg-white/5 backdrop-blur-sm hover:shadow-xl">
        <div className="px-6 py-4">
          <div className=" mb-2">
            <h1 className="text-3xl">Send Coins</h1>
          </div>
          <SendCoins />
        </div>
      </div>
    </div>
  );
};

export default Home;
