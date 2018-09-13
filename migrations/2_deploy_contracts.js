const TokenContract = artifacts.require("./Token.sol");
const CrowdsaleContract = artifacts.require("./Crowdsale.sol");
const CustomContract = artifacts.require("./CustomContract.sol");

module.exports = async function(deployer, network, accounts) {
    let wallet = '0xfe814ca17a55497a993a2d7656d440812b98b375';

    deployer.then(async () => {
      
        await deployer.deploy(TokenContract);

        await deployer.link(TokenContract, CrowdsaleContract);
        console.log('TokenContract!');

        await deployer.deploy(CrowdsaleContract, wallet, TokenContract.address);
        console.log('CrowdsaleContract!');

        await deployer.link(TokenContract, CustomContract);
        await deployer.link(CrowdsaleContract, CustomContract);
        await deployer.deploy(CustomContract, TokenContract.address, CrowdsaleContract.address);
        console.log('CustomContract!');

        return console.log('Contracts are deployed!');
    });


};
