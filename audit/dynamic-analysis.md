# Dynamic Analysis
Performed by Blockchain Labs, 24 Sep, 2018

```
  Contract: CustomContract
    Buying Tokens
      √ Sending ETH to custom contract should increase token balance (118ms)
      √ Sending ETH to the custom contracts buyTokens function should increase token balance (123ms)
      √ Buying tokens through the fallback function and buyTokens should get the same number of tokens (204ms)
    Failing to buy Tokens
      √ Can't buy tokens if you are not whitelisted (79ms)
      √ Can't buy tokens if the contract is paused (88ms)

  Contract: Ownable
    as an ownable
      √ should have an owner
      √ changes owner after transfer (95ms)
      √ should prevent non-owners from transfering (86ms)

  Contract: Pausable
    √ can perform normal process in non-pause (125ms)
    √ can not perform normal process in pause (224ms)
    √ can not take drastic measure in non-pause (197ms)
    √ can take a drastic measure in a pause (219ms)
    √ should resume allowing normal process after pause is over (272ms)
    √ should prevent drastic measure after pause is over (241ms)

  Contract: Whitelist
    in normal conditions
      √ should allow whitelisted address to call #onlyWhitelistedCanDoThis (135ms)
      √ should remove addresses from whiteslisted correctly (221ms)
    in adversarial conditions
      √ should not allow "anyone" to add to the whitelist (83ms)
      √ should not allow "anyone" to remove from the whitelist (61ms)
      √ should not allow "anyone" to call #onlyWhitelistedCanDoThis (43ms)


  19 passing (6s)
```
