pragma solidity ^0.4.24;

import "../CustomContract.sol";

contract WhitelistMock is Whitelist {

  function onlyWhitelistedCanDoThis()
    onlyWhitelisted
    view
    external
  {
  }
}
