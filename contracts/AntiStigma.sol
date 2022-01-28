// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract AntiStigmaSociety is ERC721, ERC721URIStorage, ReentrancyGuard, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public constant ANTI_STIGMA_FREE_COUNT = 10;

    constructor() ERC721("Anti-Stigma Society", "$WHOOPIE") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function earlyMint() public nonReentrant {
        // require(mintIsActive, "Minting Anti-Stigma Society is not available yet." );
		require(_tokenIdCounter.current() < ANTI_STIGMA_FREE_COUNT, "invalid claim");
    }
    
    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
