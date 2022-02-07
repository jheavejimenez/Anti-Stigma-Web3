// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AntiStigmaSociety is ERC721, Ownable, ReentrancyGuard {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    bool public mintIsActive = false;
    string public baseURI = "";
    string public baseExtension = "";
  
    uint256 public constant ANTISTIGMASOCIETY_MAX = 10000;
    uint256 public constant MAX_MINT_TX = 10;
    uint256 public wlMintPrice = 6 ether;
    uint256 public publicMintPrice = 12 ether;


    constructor() ERC721("Anti-Stigma Society", "AntiStigmaSociety") {}

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }

    function flipMintState() public onlyOwner {
        mintIsActive = !mintIsActive;
    }

    function mint() public payable nonReentrant {
        require(mintIsActive, "Minting Anti-Stigma Society is not available yet." );
		require(msg.value >= wlMintPrice, "Anti-Stigma Society: Amount of MATIC sent is incorrect.");
		_minter(msg.sender);
    }
    
    function mintForAddress(address _receiver) public onlyOwner {
        _minter(_receiver);
    }
  
    function walletOfOwner(address _owner) public view returns (uint256[] memory) {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
        uint256 currentTokenId = 1;
        uint256 ownedTokenIndex = 0;
        while (ownedTokenIndex < ownerTokenCount && currentTokenId <= ANTISTIGMASOCIETY_MAX) {
            address currentTokenOwner = ownerOf(currentTokenId);
    
            if (currentTokenOwner == _owner) {
                ownedTokenIds[ownedTokenIndex] = currentTokenId;
                ownedTokenIndex++;
            }
            currentTokenId++;
        }
        return ownedTokenIds;
    }
    
    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
        baseExtension = _newBaseExtension;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId),"ERC721Metadata: URI query for nonexistent token");
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, tokenId.toString(), baseExtension)) : "";
    }

    function withdraw() public onlyOwner {
      (bool os, ) = payable(owner()).call{value: address(this).balance}("");
      require(os);
    }
    
    function _minter(address _receiver) internal {
        for (uint256 i = 0; i < i; i++) {
            supply.increment();
            _safeMint(_receiver, supply.current());
        }
    }
    
}
