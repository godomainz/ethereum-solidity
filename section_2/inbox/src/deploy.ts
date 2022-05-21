import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import { interface_str, bytecode } from './compile';
require('dotenv').config();

const INITIAL_MESSAGE: string = 'Hi There!';
const ACCOUNT_MNEMONIC = process.env.ACCOUNT_MNEMONIC;
const url = process.env.RINKEBY_URL;
const provider = new HDWalletProvider(ACCOUNT_MNEMONIC!, url);
let inbox: Contract;
const web3 = new Web3(provider);

const deploy =async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account ', accounts[0]);
    inbox = await new web3.eth.Contract(JSON.parse(interface_str))
    .deploy({ data: bytecode, arguments: [INITIAL_MESSAGE] })
    .send({ from: accounts[0], gas: 10000000 });
    console.log('Contract deployed to ', inbox.options.address);
    provider.engine.stop();
}
deploy();