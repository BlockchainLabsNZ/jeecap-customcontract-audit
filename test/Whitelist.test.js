import expectThrow from '../helpers/expectThrow';
import expectEvent from '../helpers/expectEvent';

const WhitelistMock = artifacts.require('WhitelistMock');

require('chai')
  .use(require('chai-as-promised'))
  .should();

contract('Whitelist', function (accounts) {
  const [
    owner,
    whitelistedAddress1,
    whitelistedAddress2,
    anyone,
  ] = accounts;

  const whitelistedAddresses = [whitelistedAddress1, whitelistedAddress2];

  before(async function () {
    this.mock = await WhitelistMock.new();
  });

  context('in normal conditions', function () {
    it('should allow whitelisted address to call #onlyWhitelistedCanDoThis', async function () {
      await this.mock.addAddressToWhitelist(whitelistedAddress1, { from: owner });
      await this.mock.onlyWhitelistedCanDoThis({ from: whitelistedAddress1 })
        .should.be.fulfilled;
    });

    it('should remove addresses from whiteslisted correctly', async function(){
      await this.mock.addAddressesToWhitelist(whitelistedAddresses, {from:owner});
      await this.mock.onlyWhitelistedCanDoThis({ from: whitelistedAddress1 }).should.be.fulfilled;
      await this.mock.removeAddressesFromWhitelist(whitelistedAddresses,{from:owner});
      await expectThrow(
        this.mock.onlyWhitelistedCanDoThis({ from: whitelistedAddress1 })
      );
    })
  });

  context('in adversarial conditions', function () {
    it('should not allow "anyone" to add to the whitelist', async function () {
      await expectThrow(
        this.mock.addAddressToWhitelist(whitelistedAddress1, { from: anyone })
      );
    });

    it('should not allow "anyone" to remove from the whitelist', async function () {
      await expectThrow(
        this.mock.removeAddressFromWhitelist(whitelistedAddress1, { from: anyone })
      );
    });

    it('should not allow "anyone" to call #onlyWhitelistedCanDoThis', async function () {
      await expectThrow(
        this.mock.onlyWhitelistedCanDoThis({ from: anyone })
      );
    });
  });
});
