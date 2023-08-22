import React, { useState } from "react";
import Web3 from "web3";

const SendCoins = () => {
  const [fromAddress, setFromAddress] = useState("");
  const [toAddress, setToAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const handleSendTokens = async () => {
    try {
      const web3 = new Web3(
        new Web3.providers.HttpProvider(
          "https://delicate-wider-bridge.bsc-testnet.discover.quiknode.pro/ff404ac71e250c388fa57c7e19a090d172c31015/"
        )
      );

      const ethAmount = parseFloat(amount);
      const bnbInWei = web3.utils.toWei(ethAmount.toString(), "ether");
      const gasPrice = await web3.eth.getGasPrice();
      const nonce = await web3.eth.getTransactionCount(fromAddress);

      const transaction = {
        from: fromAddress,
        to: toAddress,
        value: bnbInWei,
        gas: 21000,
        gasPrice: gasPrice,
        nonce: nonce,
      };

      const signedTx = await web3.eth.accounts.signTransaction(
        transaction,
        privateKey
      );
      const receipt = await web3.eth.sendSignedTransaction(
        signedTx.rawTransaction
      );

      console.log("Transaction hash:", receipt.transactionHash);
    } catch (error) {
      console.error("Error sending transaction:", error);
    }
  };

  return (
    <div>
        <center>
      <h1>Send Coins</h1>
      <label>From Address:</label>
      <input
        type="text"
        value={fromAddress}
        onChange={(e) => setFromAddress(e.target.value)}
      />
      <br />
      <label>To Address:</label>
      <input
        type="text"
        value={toAddress}
        onChange={(e) => setToAddress(e.target.value)}
      />
      <br />
      <label>Amount (BNB):</label>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <label>Private Key:</label>
      <input
        type="text"
        value={privateKey}
        onChange={(e) => setPrivateKey(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSendTokens}>Send Tokens</button>
      </center>
    </div>
  );
};

export default SendCoins;
