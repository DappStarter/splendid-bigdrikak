require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lock bone system educate rare remain essay guess castle olympic stool'; 
let testAccounts = [
"0x1955bec0f4a84a5e989a24a7b503f8462e6ce8c867ce3abc6e5ab449b9acac91",
"0x585bb687d0af565d6c02af1b90e41b5ce5dc97cc56e0bcd2e04fa25fca9359ee",
"0x63cf8af4341a967f813e2408792b08ebaed248d9717b062470d9469b2b6a73e7",
"0x4e2b66581e6a25fd57d5eb5a13d67d9222dc0d3d5f2f9c774465cdcb95e9538d",
"0xf20c3775fa8131918d6c314c8c684b55419c835affb768c6411d3bdfa01a10b4",
"0xb6a01164c8c41aad8e1f503fe9ffea47fbe79e089c5b0e15df4a910386af26cc",
"0xadcc7dfe5e8aa6d95a180850b3655820b9306faffde01cb9ff0d11276ee3bfd0",
"0xd5f2bf5126f35aa60c724e7eb6a30c2d6c664a3cbd9ec7eef0272de54dbaa186",
"0x81cb75f72f87bab09a4aa55b85646c2e93bfa1ffd7f292f239410be2f01d7afd",
"0x18ca899ad66fb08087f5ed7ce4cc9baf9d6409446478a393816e707b15b08ac7"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
