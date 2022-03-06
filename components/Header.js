import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { networks } from '../utils/networks'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styled from 'styled-components'

import Navigation from './Navigation'
import WhiteLogo from '../public/logo-white.png'
import MenuOff from '../public/menu-off.webp'
import MenuOn from '../public/menu-on.webp'

const HeaderContiner = styled.header`
    display: grid;
    // grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(5, 1fr);

    @media (min-width:768px) {
        grid-template-rows: repeat(1, 1fr);
    }
    
    .header-container__logo {
        grid-area: 1 / 1 / 1 / 1;

        @media (min-width:768px) {
            grid-area: 1 / 1 / 1 / 3;
        }
    }

    .header-container__button-menu {
        margin:0 0 0 auto;
        grid-area: 1 / 5 / 1 / 5;

        @media (min-width:768px) {
            // margin:0 auto;
            grid-area: 1 / 3 / 1 / 4;
        }
    }

    .header-container__button-wallet__body {
        margin:0 auto;
        grid-area: 2 / 2 / 2 / 5;
        
        @media (min-width:768px) {
            margin:0 0 0 auto;
            grid-area: 1 / 4 / 1 / 6;
        }
    }
`;


const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const isMobile = useMediaQuery({ query: '(max-width:786px)' })
	const router = useRouter()
	const [currentAccount, setCurrentAccount] = useState('');
	const [network, setNetwork] = useState('');

	useEffect(() => {
		setOpenMenu(false)
	}, [router])

	useEffect(() => {
		if (isMobile) {
			if (openMenu) {
				document.body.classList.add('overflow-hidden')
				return
			}

			document.body.classList.remove('overflow-hidden')
		}
	}, [openMenu])

	const toggleMenu = () => {
		setOpenMenu(prevOpenMenu => !prevOpenMenu)
	}

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask -> https://metamask.io/");
				return;
			}

			const accounts = await ethereum.request({ method: "eth_requestAccounts" });

			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error)
		}
	}

	const switchNetwork = async () => {
		if (window.ethereum) {
			try {
				// Try to switch to the Mumbai testnet
				await window.ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
				});
			} catch (error) {
				if (error.code === 4902) {
					try {
						await window.ethereum.request({
							method: 'wallet_addEthereumChain',
							params: [
								{
									chainId: '0x13881',
									chainName: 'Polygon Mumbai Testnet',
									rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
									nativeCurrency: {
										name: "Mumbai Matic",
										symbol: "MATIC",
										decimals: 18
									},
									blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
								},
							],
						});
					} catch (error) {
						console.log(error);
					}
				}
				console.log(error);
			}
		} else {
			// If window.ethereum is not found then MetaMask is not installed
			alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
		}
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log('Make sure you have metamask!');
			return;
		} else {
			console.log('We have the ethereum object', ethereum);
		}

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			console.log('Found an authorized account:', account);
			setCurrentAccount(account);
		} else {
			console.log('No authorized account found');
		}

		const chainId = await ethereum.request({ method: 'eth_chainId' });
		setNetwork(networks[chainId]);

		ethereum.on('chainChanged', handleChainChanged);

		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload();
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	const renderSwitchNetwork = () => {
		if (network !== 'Polygon Mumbai Testnet') {
			return (
				<div className='header-container__button-wallet__body d-flex align-items-center'>
					<h2>Please switch to Polygon Mumbai Testnet</h2>
					{/* This button will call our switch network function */}
					<button className='button button-white text-end px-3 py-1' onClick={switchNetwork}>Click here to switch</button>
				</div>
			);
		}
	}
	const renderNotConnectedContainer = () => (
		<div className='header-container__button-wallet__body d-flex align-items-center'>
			<button className='button button-white text-end px-3 py-1' onClick={connectWallet} >Connect Wallet</button>
		</div>
	);

	return (
		<HeaderContiner className='p-3 container position-relative'>
			<Link href='/'>
				<a className='header-container__logo'>
					<Image
						alt='Logo'
						src={WhiteLogo}
						width={70}
						height={70}
					/>
				</a>
			</Link>
			{router.pathname !== '/' &&
				<div className='header-container__button-menu d-flex align-items-center mx-md-auto'>
					<button className='header-container__button text-center' onClick={toggleMenu}>
						<Image
							alt='Menu Icon'
							src={openMenu ? MenuOn : MenuOff}
							width={50}
							height={50}
						/>
					</button>
				</div>
			}
			{/* TODO: */}
			{currentAccount ? <p> Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)} </p> : <p> Not connected </p>}
			{!currentAccount && renderNotConnectedContainer()}
			{currentAccount && renderSwitchNetwork()}

			<Navigation className={!openMenu ? '' : 'open'} />
		</HeaderContiner>
	)
}

export default Header
