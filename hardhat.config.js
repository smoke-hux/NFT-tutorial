require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });
const ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/a5cHh0X2h-lt1eCKVupyRU0emU5iOxlS",
      accounts: ["623b5bf01f64009699a6efc8aba269cd5b297cce56cf6648929c2e2dad8c50d2"],
    },
  },
}
