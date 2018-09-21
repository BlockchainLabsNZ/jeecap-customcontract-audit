import assertFail from '../test/assertRevert';

const BigNumber = web3.BigNumber;

const should = require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const CustomContract = artifacts.require('CustomContract');
const Token = artifacts.require('TestToken');
const Crowdsale = artifacts.require('Crowdsale');

const oneEth = 1000000000000000000;
const totalSupply = oneEth * 1000;

contract('CustomContract', function ([owner, wallet, investor, investor2, vandal]) {
  let customContract, token, crowdsale;

  beforeEach(async function () {
      token = await Token.new(totalSupply, { from: owner });
      crowdsale = await Crowdsale.new(1, wallet, token.address);
      await token.transfer(crowdsale.address, totalSupply, { from: owner })
      customContract = await CustomContract.new(token.address, crowdsale.address);
  });

  describe('Buying Tokens', function () {
    beforeEach(async function () {
      await customContract.addAddressesToWhitelist([investor, investor2], { from: owner });
    });

    it('Sending ETH to custom contract should increase token balance', async function () {
      let pre_balance = (await token.balanceOf(investor)).toNumber();
      await web3.eth.sendTransaction({
        from: investor,
        to: customContract.address,
        value: oneEth,
        gas: 600000
      });
      let post_balance = (await token.balanceOf(investor)).toNumber();
      expect(post_balance > pre_balance).to.be.true;
    });

    it('Sending ETH to the custom contracts buyTokens function should increase token balance', async function () {
      let pre_balance = (await token.balanceOf(investor)).toNumber();
      await customContract.buyTokens({ from: investor, value: oneEth, gas: 600000 });
      let post_balance = (await token.balanceOf(investor)).toNumber()
      expect(post_balance > pre_balance).to.be.true;
    });

    it('Buying tokens through the fallback function and buyTokens should get the same number of tokens', async function () {
      await customContract.buyTokens({ from: investor, value: oneEth });
      await web3.eth.sendTransaction({
        from: investor2,
        to: customContract.address,
        value: oneEth,
        gas: 600000
      });
      let investor1_balance = (await token.balanceOf(investor)).toNumber();
      let investor2_balance = (await token.balanceOf(investor2)).toNumber();
      expect(investor1_balance).to.equal(investor2_balance);
    });
  });

  describe('Failing to buy Tokens', function () {
    it("Can't buy tokens if you are not whitelisted", async function () {
      await assertFail(customContract.buyTokens({ from: investor, value: oneEth }));
    });

    it("Can't buy tokens if the contract is paused", async function () {
      await customContract.pause({ from: owner });
      await assertFail(customContract.buyTokens({ from: investor, value: oneEth }));
    });
  });
});
