// https://eth-ropsten.alchemyapi.io/v2/NGkXdUJHsmn9J2Sv-opQBXS0m6tgDYo5

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/NGkXdUJHsmn9J2Sv-opQBXS0m6tgDYo5",
      accounts: [
        "b160edcaa10648a555cceea9db4eda91ad43394a3d1280556572b2cd009c0dbf",
      ],
    },
  },
};
