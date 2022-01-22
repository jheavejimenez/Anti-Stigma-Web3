import { useState, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

import Navigation from './Navigation'
import WhiteLogo from '../public/logo-white.png'
import MenuOff from '../public/menu-off.png'
import MenuOn from '../public/menu-on.png'

const HeaderContiner = styled.header`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
    .header-container__logo {
        grid-area: 1 / 1 / 1 / 3; 
    }

    .header-container__button {
        grid-area: 1 / 3 / 1 / 4;
    }

    .header-container__button-wallet {
        grid-area: 1 / 4 / 1 / 6;
    }

    button {
        all:unset;
    }
`;

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = () => {
        setOpenMenu(prevOpenMenu => !prevOpenMenu)
    }

    return (
        <HeaderContiner className='p-3 container position-relative'>
            <Link href='/'>
                <a className='header-container__logo'>
                    <Image
                        src={WhiteLogo}
                        width={100}
                        height={100}
                    />
                </a>
            </Link>
            <button className='header-container__button text-center' onClick={toggleMenu}>
                <Image
                    src={openMenu ? MenuOn : MenuOff}
                    width={60}
                    height={60}
                />
            </button>
            {/* {openMenu ? <Nav /> : ''} */}
            <button className='header-container__button-wallet text-end'>Connect Wallet</button>
            <Navigation className={!openMenu ? '' : 'open'}/>
        </HeaderContiner>
    )
}

export default Header
