import HDWalletProvider from '@truffle/hdwallet-provider';
import Web3 from 'web3';
import { interface_str, bytecode } from './compile';
require('dotenv').config();

const ACCOUNT_MNEMONIC = process.env.ACCOUNT_MNEMONIC;
console.log(ACCOUNT_MNEMONIC);
const url = 'https://rinkeby.infura.io/v3/98399d2e99d34030847b4b2a13f83be1';
const provider = new HDWalletProvider(ACCOUNT_MNEMONIC!, url);

const web3 = new Web3(provider);