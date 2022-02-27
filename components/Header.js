import { useState, useEffect } from 'react'
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
    grid-template-columns: repeat(5, 1fr);
    
    .header-container__logo {
        grid-area: 1 / 1 / 1 / 3; 
    }

    .header-container__button {
        grid-area: 1 / 3 / 1 / 4;
    }

    .header-container__button-wallet__body {
        margin:0 0 0 auto;
        grid-area: 1 / 4 / 1 / 6;
    }
`;


const Header = ({ data }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setOpenMenu(false)
    }, [router])

    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    return (
        <HeaderContiner className='p-3 container position-relative'>
            <Link href='/'>
                <a className='header-container__logo'>
                    <Image
                        alt='WhiteLogo'
                        src={WhiteLogo}
                        width={70}
                        height={70}
                    />
                </a>
            </Link>
            {router.pathname !== '/' &&
                <div className='header-container__button-menu d-flex align-items-center mx-auto'>
                    <button className='header-container__button text-center' onClick={toggleMenu}>
                        <Image
                            alt='Menu'
                            src={openMenu ? MenuOn : MenuOff}
                            width={50}
                            height={50}
                        />
                    </button>
                </div>
            }
            <div className='header-container__button-wallet__body d-flex align-items-center'>
                <button className='button button-white text-end px-3 py-1'>Connect Wallet</button>
            </div>
            <Navigation className={!openMenu ? '' : 'open'} />
        </HeaderContiner>
    )
}

export default Header
