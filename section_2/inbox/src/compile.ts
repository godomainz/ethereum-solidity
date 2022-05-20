const solc = require('solc');
import { resolve } from 'path';
import { readFileSync } from 'fs';

const inboxPath = resolve(__dirname, 'contracts', 'Inbox.sol');
const source = readFileSync(inboxPath, 'utf8');
const bytecode= solc.compile(source,1).contracts[':Inbox'].bytecode;
const interface_str= solc.compile(source,1).contracts[':Inbox'].interface;
export { bytecode, interface_str };
