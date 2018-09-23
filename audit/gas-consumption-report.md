# Gas consumption report
performed by Blockchain Labs, 24 Sep, 2018

```
  Contract: CustomContract
    Buying Tokens
      √ Sending ETH to custom contract should increase token balance (117741 gas)
      √ Sending ETH to the custom contracts buyTokens function should increase token balance (118001 gas)
      √ Buying tokens through the fallback function and buyTokens should get the same number of tokens (220742 gas)
    Failing to buy Tokens
      √ Can't buy tokens if you are not whitelisted (21931 gas)
      √ Can't buy tokens if the contract is paused (49980 gas)

  Contract: Ownable
    as an ownable
      √ should have an owner
      √ changes owner after transfer (62804 gas)
      √ should prevent non-owners from transfering (23250 gas)

  Contract: Pausable
    √ can perform normal process in non-pause (443057 gas)
    √ can not perform normal process in pause (466002 gas)
    √ can not take drastic measure in non-pause (422797 gas)
    √ can take a drastic measure in a pause (471189 gas)
    √ should resume allowing normal process after pause is over (500226 gas)
    √ should prevent drastic measure after pause is over (479966 gas)

  Contract: Whitelist
    in normal conditions
      √ should allow whitelisted address to call #onlyWhitelistedCanDoThis (45130 gas)
      √ should remove addresses from whiteslisted correctly (68303 gas)
    in adversarial conditions
      √ should not allow "anyone" to add to the whitelist (23253 gas)
      √ should not allow "anyone" to remove from the whitelist (23209 gas)
      √ should not allow "anyone" to call #onlyWhitelistedCanDoThis

·----------------------------------------------------------------------------------|----------------------------·
|                                       Gas                                        ·  Block limit: 6721975 gas  │
····················································|······························|·····························
|  Methods                                          ·         20 gwei/gas          ·       241.33 usd/eth       │
···················|································|·········|·········|··········|··············|··············
|  Contract        ·  Method                        ·  Min    ·  Max    ·  Avg     ·  # calls     ·  usd (avg)  │
···················|································|·········|·········|··········|··············|··············
|  CustomContract  ·  buyTokens                     ·      -  ·      -  ·  118001  ·           2  ·       0.57  │
···················|································|·········|·········|··········|··············|··············
|  CustomContract  ·  withdrawFunds                 ·      -  ·      -  ·       -  ·           0  ·          -  │
···················|································|·········|·········|··········|··············|··············
|  PausableMock    ·  drasticMeasure                ·      -  ·      -  ·   27083  ·           1  ·       0.13  │
···················|································|·········|·········|··········|··············|··············
|  PausableMock    ·  normalProcess                 ·      -  ·      -  ·   42115  ·           2  ·       0.20  │
···················|································|·········|·········|··········|··············|··············
|  PausableMock    ·  pause                         ·  28049  ·  43164  ·   40141  ·           5  ·       0.19  │
···················|································|·········|·········|··········|··············|··············
|  PausableMock    ·  unpause                       ·      -  ·      -  ·   14005  ·           2  ·       0.07  │
···················|································|·········|·········|··········|··············|··············
|  TestToken       ·  transfer                      ·      -  ·      -  ·       -  ·           0  ·          -  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  addAddressesToWhitelist       ·      -  ·      -  ·   48436  ·           1  ·       0.23  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  addAddressToWhitelist         ·      -  ·      -  ·   45130  ·           1  ·       0.22  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  claimOwnership                ·      -  ·      -  ·   19236  ·           1  ·       0.09  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  removeAddressesFromWhitelist  ·      -  ·      -  ·   19867  ·           1  ·       0.10  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  removeAddressFromWhitelist    ·      -  ·      -  ·       -  ·           0  ·          -  │
···················|································|·········|·········|··········|··············|··············
|  WhitelistMock   ·  transferOwnership             ·      -  ·      -  ·   43568  ·           1  ·       0.21  │
···················|································|·········|·········|··········|··············|··············
|  Deployments                                      ·                              ·  % of limit  ·             │
····················································|·········|·········|··········|··············|··············
|  Crowdsale                                        ·      -  ·      -  ·  361347  ·       5.4 %  ·       1.74  │
····················································|·········|·········|··········|··············|··············
|  CustomContract                                   ·      -  ·      -  ·  829105  ·      12.3 %  ·       4.00  │
····················································|·········|·········|··········|··············|··············
|  Ownable                                          ·      -  ·      -  ·  208823  ·       3.1 %  ·       1.01  │
····················································|·········|·········|··········|··············|··············
|  PausableMock                                     ·      -  ·      -  ·  400942  ·         6 %  ·       1.94  │
····················································|·········|·········|··········|··············|··············
|  TestToken                                        ·      -  ·      -  ·  244912  ·       3.6 %  ·       1.18  │
····················································|·········|·········|··········|··············|··············
|  WhitelistMock                                    ·      -  ·      -  ·  453156  ·       6.7 %  ·       2.19  │
·---------------------------------------------------|---------|---------|----------|---------------------------·

  19 passing (2m)
```