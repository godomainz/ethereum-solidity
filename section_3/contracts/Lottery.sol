// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 < 0.9.0;

contract Lottery {
    address public manager;

    constructor() {
        manager = msg.sender;
    }
}