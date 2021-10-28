// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage{
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse Tokens", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        _tokenIds.increment(); // to increment the token ID
        uint256 newItemId = _tokenIds.current(); // first token id will 1 , then 2 and so on

        _mint(msg.sender, newItemId); // msg.sender == address of the creator
        _setTokenURI(newItemId, tokenURI); //  from ERC721URIStorage contract 
        setApprovalForAll(contractAddress, true); //give approval permission to transact this NFT/TOKEN between users
        return newItemId; // for able to display in frontend
    }
}
