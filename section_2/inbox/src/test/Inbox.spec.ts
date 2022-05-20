import * as assert from 'assert';
import { provider } from 'ganache';
import Web3 from 'web3';
import { beforeEach } from 'mocha';
import { bytecode, interface_str } from '../compile';
import { Contract } from 'web3-eth-contract';

const web3 = new Web3(provider() as any);
let accounts:string[];
let inbox: Contract;
beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();

    inbox = await new web3.eth.Contract(JSON.parse(interface_str)).deploy({data: bytecode, arguments: ['Hi There']})
    .send({ from: accounts[0], gas: 10000000 });
});

describe("Inbox",()=>{
    it('Deploys a contract', ()=>{
        console.log(inbox);
    });
});