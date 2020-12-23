const Albums = artifacts.require("Albums");

module.exports = function (deployer) {
  deployer.deploy(Albums);
};
