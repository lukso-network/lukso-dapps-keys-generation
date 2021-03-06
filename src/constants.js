let constants = {}
constants.organization = 'lukso-network'
constants.repoName = 'lukso-chain-spec'
constants.addressesSourceFile = 'contracts.json'
constants.ABIsSources = {
  KeysManager: 'KeysManager.abi.json'
}
constants.userDeniedTransactionPattern = 'User denied transaction'

constants.NETWORKS = {
  '22': {
    NAME: 'L14',
    BRANCH: 'l14',
    TESTNET: true
  }
}

module.exports = {
  constants
}
