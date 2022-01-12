require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift rescue place mistake just cloth equal gas'; 
let testAccounts = [
"0x56176bc2136aca1dc4b4e2f3ad4941edef27b1cb3fe8d58ca318f62e0329d91f",
"0x1f93388f1f03ee2735bca13759f6c69a59ae36a1b9ae3a89eebe3b60b8c3e897",
"0xba6ac95895bd0aefb3b45eaf848ae74423e28f99a32eeab95f75af7736ddda48",
"0x2fcf69b40833080a76e2066db0854e30c5f1e97cb9ed90d1ccb2747fd2e3813f",
"0xebc2091b9846ed6e4c964c1d4484070a80248caf7c38ed63a90ae25a6e97567d",
"0x7a29d01f7e026b70aebc1b307c55a71b1d3a55f352642a2062a72842092ff7e7",
"0x433b474695a250cf9754555778e4f6c6e2a19da3181f657aaa045f838680a782",
"0x6b37fb75612ba7af288c19771499dd207002b8317a7dda475a50a0754cf779d8",
"0xd79e45583757fe718c0179cc230816239b6739cc541134a893cb4504b6801b76",
"0xc66e9dc77e7b3cc00416651b8c68f9537ebe5ebc5a48d9f30c517fcb49e2a464"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


