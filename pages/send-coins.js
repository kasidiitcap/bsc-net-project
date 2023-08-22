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
      <div className="grid grid-cols-3 grid-rows-4 gap-4 mb-4">
        <div className="text-right">
          <label className="form-col">From Address</label>
        </div>
        <div className="col-span-2">
          <input
            type="text"
            value={fromAddress}
            onChange={(e) => setFromAddress(e.target.value)}
            className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight outline-2 outline-teal-900"
          />
        </div>
        <div className="text-right" >
          <label className="form-col">To Address</label>
        </div>
        <div className="col-span-2">
          <input
            type="text"
            value={toAddress}
            onChange={(e) => setToAddress(e.target.value)}
            className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight outline-2 outline-teal-900"
          />
        </div>
        <div className="text-right" >
          <label className="form-col">Amount (BNB)</label>
        </div>
        <div className="col-span-2">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight outline-2 outline-teal-900"
          />
        </div>
        <div className="text-right" >
          <label className="form-col">
            Private Key
          </label>
        </div>
        <div className="col-span-2">
          <input
            type="text"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            className="shadow border rounded w-full py-1 px-2 text-gray-700 leading-tight outline-2 outline-teal-900"
          />
        </div>
        
      </div>
      <button onClick={handleSendTokens} className="px-4 py-2 bg-white/10 rounded-xl hover:bg-white/20 w-full">Send Tokens</button>
    </div>
  );
};

export default SendCoins;
