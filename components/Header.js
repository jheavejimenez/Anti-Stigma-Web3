import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMediaQuery } from 'react-responsive'
import { networks } from '../utils/networks'
import styled from 'styled-components'
import { Modal, Button, notification } from 'antd';

import { AppContext } from '../pages/_app'

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
	const router = useRouter()
	const isMobile = useMediaQuery({ query: '(max-width:786px)' })
	const [openMenu, setOpenMenu] = useState(false);
	const [currentAccount, setCurrentAccount] = useState('');
	const [network, setNetwork] = useState('');
	const {setModalAttr} = useContext(AppContext);

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
				notification.error({
					message: 'Error',
					description: 'Get MetaMask -> https://metamask.io/',
					placement: 'bottomRight',
				});
				return
			}
			
			const accounts = await ethereum.request({ method: "eth_requestAccounts" });
			setCurrentAccount(accounts[0]);
		} catch (error) {
			setModalAttr({
				visible:true,
				message: error,
			})
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
						setModalAttr({
							visible:true,
							message: error,
						})
					}
				}
				
				setModalAttr({
					visible:true,
					message: error,
				})
			}
			return
		} 
		
		// If window.ethereum is not found then MetaMask is not installed
		setModalAttr({
			visible:true,
			message: 'MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html',
		})
	}

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) return // Checking if have metamask

		const accounts = await ethereum.request({ method: 'eth_accounts' });

		if (accounts.length !== 0) {
			const account = accounts[0];
			setCurrentAccount(account);
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

	const walletButtonCheck = () => {
		if (currentAccount && network !== 'Polygon Mumbai Testnet') {
			return (
				<div className='text-end'>
					<button className='button button-white px-3 py-1 mb-2' onClick={switchNetwork}>Click here to switch</button>
					<h6 className='d-block'>Please switch to Polygon Mumbai Testnet</h6>
				</div>
			);
		}

		if (currentAccount) {
			return (
				<div className='text-end'>
					<button disabled className='button button-white px-3 py-1 mb-2'>Connected</button>
					<h6 className='d-block'>Wallet: {currentAccount.slice(0, 6)}...{currentAccount.slice(-4)}</h6>
				</div>
			)
		}

		return (
			<button className='button button-white text-end px-3 py-1' onClick={connectWallet} >Connect Wallet</button>
		)
	}

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
			<div className='header-container__button-wallet__body d-flex align-items-center'>
				{walletButtonCheck()}
			</div>

			<Navigation className={!openMenu ? '' : 'open'} />
		</HeaderContiner>
	)
}

export default Header
