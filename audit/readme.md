# Jeecap Smart Contract Audit Report
<br>

## Preamble
This audit report was undertaken by <b>BlockchainLabs.nz</b> for the purpose of providing feedback to <b>Jeecap</b>. <br>It has subsequently been shared publicly without any express or implied warranty.

Solidity contracts were sourced directly from the Jeecaps GitLab account at this commit [d5742a994118a](https://gitlab.com/jeecap/smart-contract/commit/d5742a994118a139623e279204344b0ddc127203), we would encourage all community members and token holders to make their own assessment of the contracts once they are deployed and verified.

<br>

## Scope
The following contract was a subject for static, and dynamic analyses:

Contracts
  - [CustomContract.sol](https://github.com/BlockchainLabsNZ/jeecap-customcontract-audit/blob/master/contracts/CustomContract.sol)
<br>

## Focus areas
The audit report is focused on the following key areas - though this is not an exhaustive list.


### Correctness
- No correctness defects uncovered during static analysis?
- No implemented contract violations uncovered during execution?
- No other generic incorrect behaviour detected during execution?
- Adherence to adopted standards such as ERC20?

### Testability
- Test coverage across all functions and events?
- Test cases for both expected behaviour and failure modes?
- Settings for easy testing of a range of parameters?
- No reliance on nested callback functions or console logs?
- Avoidance of test scenarios calling other test scenarios?

### Security
- No presence of known security weaknesses?
- No funds at risk of malicious attempts to withdraw/transfer?
- No funds at risk of control fraud?
- Prevention of Integer Overflow or Underflow?

### Best Practice
- Explicit labeling for the visibility of functions and state variables?
- Proper management of gas limits and nested execution?
- Latest version of the Solidity compiler?

<br>

## Analysis

- [Gas Consumption report](gas-consumption-report.md)
- [Dynamic analysis](dynamic-analysis.md)
- [Test coverage](test-coverage.md)

<br>

## Issues

### Severity Description
<table>
<tr>
  <td>Minor</td>
  <td>A defect that does not have a material impact on the contract execution and is likely to be subjective.</td>
</tr>
<tr>
  <td>Moderate</td>
  <td>A defect that could impact the desired outcome of the contract execution in a specific scenario.</td>
</tr>
<tr>
  <td>Major</td>
  <td> A defect that impacts the desired outcome of the contract execution or introduces a weakness that may be exploited.</td>
</tr>
<tr>
  <td>Critical</td>
  <td>A defect that presents a significant security vulnerability or failure of the contract across a range of scenarios.</td>
</tr>
</table>

### Minor
- **Dead code** - `Best practice` Remove dead code, or add a comment if there is a reason it has been commented out  [View on GitHub](https://github.com/BlockchainLabsNZ/jeecap-customcontract-audit/issues/1)

### Moderate
- None found

### Major
- None found

### Critical
- **Potential re-entrancy bug** - `Security` Using this method is not recommended because it forwards all of the transactions gas into control of an external contract [View on GitHub](https://github.com/BlockchainLabsNZ/jeecap-customcontract-audit/issues/2)


<br>

## Observations
- Sending Ether to this contract, or calling the BuyTokens function will forward the transaction to a external "CrowdSale" contract address. This external contract was outside of the scope of this audit. This smart contract is expecting to interact with the external "CrowdSale" smart contract in a very specific way. Ether forwarded to an external "CrowdSale" smart contract that does not have the functionality expected by this Smart Contract will result in lost Ether. Users of this smart contract  must check the address of the external "Crowdsale" smart contract that this smart contract will be forwarding the ether too. 

<br>

## Conclusion

The developers demonstrated an understanding of Solidity and smart contract development. We took part in carefully reviewing all source code provided, including static, and dynamic testing methodology.

This contract relies heavily on an external "CrowdSale" contract which is not in the scope of this audit. It is expected that the "CustomContract" will forward ether to the "CrowdSale" address and then transfer any token balance to the purchaser. If this either is forwarded to any smart contract other then a expected "CrowdSale" smart contract the Ether will be lost and tokens will not be sent back to the purchaser.

Overall we consider the resulting contracts adequate and have not identified any potential vulnerabilities in the intended use of this "CustomContract". If the "CrowdSale" smart contract has the expected functionality this contract has a low level risk of ETH being hacked or stolen from the inspected contracts. We strongly recommend that the users of this smart contract verify that the external smart contract has the functionality that they expect.


<br>
___

### Disclaimer

Our team uses our current understanding of the best practises for Solidity and Smart Contracts. Development in Solidity and for Blockchain is an emerging area of software engineering which still has a lot of room to grow, hence our current understanding of best practices may not find all of the issues in this code and design.
We have not analysed any of the assembly code generated by the Solidity compiler. We have not verified the deployment process and configurations of the contracts. We have only analysed the code outlined in the scope. We have not verified any of the claims made by any of the organisations behind this code.
Security audits do not warrant bug-free code. We encourage all users interacting with smart contract code to continue to analyse and inform themselves of any risks before interacting with any smart contracts.
