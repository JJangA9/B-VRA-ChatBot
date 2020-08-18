// truffle.js config for klaytn.

const PrivateKeyConnector = require('connect-privkey-to-provider')
const NETWORK_ID = '1001'
const GASLIMIT = '20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY = '0xdd248d91f9ef6cde625e3c607aab99ee58fa4b62238e077c9f63970ccb3bff8b'

module.exports = {
    networks: {
        klaytn: {
            provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}