pragma solidity ^0.4.24;

import "./BasicToken.sol";

contract TestToken is BasicToken {

  constructor(uint256 initial_balance) {
    balances[msg.sender] = initial_balance;
  }

}
