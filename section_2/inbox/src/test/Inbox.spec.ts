import * as assert from 'assert';
import { provider } from 'ganache';
import Web3 from 'web3';
import { beforeEach } from 'mocha';

const web3 = new Web3(provider() as any);

beforeEach(async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
});

describe("Inbox",()=>{
    it('Deploys a contract', ()=>{
        
    });
});