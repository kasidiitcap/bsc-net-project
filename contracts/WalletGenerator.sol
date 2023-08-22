// WalletGenerator.sol
pragma solidity ^0.8.0;

contract WalletGenerator {
    address[] public wallets;

    function generateWallet() public {
        address newWallet = address(new Wallet());
        wallets.push(newWallet);
    }
}

contract Wallet {
    // Your wallet contract implementation
}
