const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');
const mnemonic = ""

module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    bscscan: 'WR3S16FRKR2WGQQ4B8K8DFQ2SYU2HII9CY',
    etherscan:''
  },
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks;
  // see <http://truffleframework.com/docs/advanced/configuration>
  // for more details on how to specify configuration options!
  //
  networks: {
   development: {
     host: "127.0.0.1",
     port: 8545,
     network_id: "*"
   },
   bsctest: {
    provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
    network_id: 97,
    confirmations: 10,
    timeoutBlocks: 200,
    skipDryRun: true
   },
   bsc: {
    provider: () => new HDWalletProvider(mnemonic, `https://bsc-dataseed.binance.org`),
    network_id: 56,
    confirmations: 10,
    timeoutBlocks: 200,
    skipDryRun: true
   }
  },  
  compilers: {
    solc: {
      version: "0.6.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1500
        }
      }
    }
  }
};
