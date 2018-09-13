# Custom Contract

Please see below CustomContract smart contracts for crowdsale.

## Contracts

Please see the [contracts/](contracts) directory.

## Develop

* Contracts are written in [Solidity][solidity] and tested using [Truffle][truffle] and [ganache-cli][ganache-cli].

## Code

#### Functions

**fallback**
```cs
function () external payable onlyWhitelisted whenNotPaused
```
Payable function to buy tokens.

**buyTokens**
```cs
function buyTokens() public payable onlyWhitelisted whenNotPaused 
```
Payable function to buy tokens.


#### CustomContract public variable
    
**token**
address contains token address.

**crowdsale**
address contains crowdsale address.

### Dependencies

```bash
# Install Truffle and ganache-cli packages globally:
$ npm install -g truffle ganache-cli

# Install local node dependencies:
$ npm install
```

### Test

Now is not available 

```bash
$ ganache-cli&
$ truffle test --network ganache
```

### Code Coverage

Now is not available 

```bash
$ ./node_modules/.bin/solidity-coverage
```

## License

Apache License v2.0

[ethereum]: https://www.ethereum.org/

[solidity]: https://solidity.readthedocs.io/en/develop/
[truffle]: http://truffleframework.com/
[ganache-cli]: https://github.com/trufflesuite/ganache-cli