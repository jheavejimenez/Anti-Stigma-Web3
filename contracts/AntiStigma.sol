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

    bool public saleOpen = false;
    bool public reveal = false; // reveal is true when presale is over and sale is open
    bool public onlyWhitelisted = true;

    address[] public whitelistedAddresses;

    string public baseURI = "";
    string public baseExtension = ".json";
  
    uint256 public constant ANTISTIGMASOCIETY_MAX = 8750;
    uint256 public constant OWNER_MAX_CLAIM = 750;
    uint256 public constant MAX_MINT_TX = 10;
    uint256 public wlMintPrice = 6 ether;
    uint256 public publicMintPrice = 12 ether;


    constructor() ERC721("Anti-Stigma Society - Alpha Class", "AntiStigmaSociety") {}

    modifier mintCompliance(uint256 _mintAmount) {
        require(_mintAmount > 0 && _mintAmount <= MAX_MINT_TX, "Invalid mint amount!");
        require(supply.current() + _mintAmount <= maxSupply, "Max supply exceeded!");
        _;
    }

    function totalSupply() public view returns (uint256) {
        return supply.current();
    }

    function mint(uint256 amount) public payable nonReentrant {
        require(saleOpen == true, 'Minting is not open');
        require(supply.current() < 8000, "invalid claim");
		require(msg.value >= wlMintPrice * amount, "Anti-Stigma Society: Amount of MATIC sent is incorrect.");
		_minter(msg.sender, amount);
    }
    
    function ownerClaim(address _receiver, uint256 amount) public onlyOwner {
        require((supply.current() < OWNER_MAX_CLAIM) && (supply.current() < ANTISTIGMASOCIETY_MAX), "Max supply exceeded!");
        _minter(_receiver, amount);
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

    function toggleSale() public onlyOwner {
        saleOpen = !saleOpen;
    }

    function toggleReveal() public onlyOwner {
        reveal = true;
    }

    function whitelistUsers(address[] calldata _users) public onlyOwner {
        delete whitelistedAddresses;
        whitelistedAddresses = _users;
    }

    function withdraw() public onlyOwner {
      (bool os, ) = payable(owner()).call{value: address(this).balance}("");
      require(os);
    }
    
    function _minter(address _receiver, uint256 amount) internal {
        for (uint256 i = 0; i < amount; i++) {
            supply.increment();
            _safeMint(_receiver, supply.current());
        }
    }
    
}
