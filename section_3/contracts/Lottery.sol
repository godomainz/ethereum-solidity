// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 < 0.9.0;

contract Lottery {
    address public manager;
    address[] public players;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable{
        require(msg.value > .01 ether);
        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, (block.timestamp), players)));
    }

    function pickWinner() public {
        uint index = random() % players.length;
        payable(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }
}