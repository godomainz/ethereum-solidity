const solc = require('solc');
import { resolve } from 'path';
import { readFileSync } from 'fs';

const inboxPath = resolve(__dirname, 'contracts', 'Inbox.sol');
const source = readFileSync(inboxPath, 'utf8');

export default solc.compile(source,1).contracts[':Inbox'];
