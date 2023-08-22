
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
      <h1>BSC Wallet Generator</h1>
      <button onClick={generateWallet}>Generate Wallet</button>
      {wallet && (
        <div>
          <h2>Generated Wallet:</h2>
          <p>Address: {wallet.address}</p>
          <p>Private Key: {wallet.privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default Generate;





