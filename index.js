const Web3 = require('web3');
const TruffleContract = require('@truffle/contract');

// Adresse de votre compte Ethereum (remplacez par la vôtre)
const accountAddress = '0x68EcEb846F98a89a34a486d52675978c91Cc87c1';

// Chargement de la configuration du contrat
const SimpleStorageContract = require('./build/contracts/SimpleStorage.json');

// Création de l'instance Web3 connectée à Ganache
const web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(web3Provider);

// Initialisation du contrat
const SimpleStorage = TruffleContract(SimpleStorageContract);
SimpleStorage.setProvider(web3Provider);

const App = {
  start: async function() {
    const instance = await SimpleStorage.deployed();

    // Écriture dans le contrat
    await instance.set(5, {from: accountAddress});

    // Lecture depuis le contrat
    const result = await instance.get.call();

    console.log("Value stored in contract: " + result);
  }
};

App.start();

