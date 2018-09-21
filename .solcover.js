module.exports = {
    norpc:true,
    skipFiles: ['Migrations.sol',
                'token/BasicToken.sol',
                'token/ERC20.sol',
                'token/ERC20Basic.sol',
                'token/SafeMath.sol',
                'token/TestToken.sol',
                'Crowdsale/Crowdsale.sol',
                'Crowdsale/SafeERC20.sol',
                'mocks/PausableMock.sol',
                'mocks/WhitelistMock.sol'
                ]
};
