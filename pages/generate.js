
import React, { useState } from 'react';
import Web3 from 'web3';

const Generate = () => {
  const [wallet, setWallet] = useState(null);

  const generateWallet = async () => {
    try {
      const web3 = new Web3(
        'https://data-seed-prebsc-1-s1.bnbchain.org:8545'
      );

      const newAccount = web3.eth.accounts.create();

      const response = await fetch('../api/save-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address: newAccount.address,
          privateKey: newAccount.privateKey,
        }),
      });

      if (response.ok) {
        console.log('Wallet saved to database');
        setWallet(newAccount);
      } else {
        console.error('Error saving wallet:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div>
      <button onClick={generateWallet} className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 w-full">Generate Wallet</button>

      {wallet && (
        <div>
          <div className="bg-teal-100 border-l-4 border-teal-500 py-2 pl-4 my-4 rounded-r-xl">
            <p className="font-bold text-teal-900">Success</p>
            <p className="text-teal-500">Generated Wallet</p>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className="text-right">Address:</div>
            <div >{wallet.address}</div>
            <div className="col-start-2 row-start-2">{wallet.privateKey}</div>
            <div className="col-start-1 row-start-2 text-right">Private Key:</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generate;





