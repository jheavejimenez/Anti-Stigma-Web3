import { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
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
                <button className='button button-white text-end px-3 py-1'>Connect Wallet</button>
            </div>
            <Navigation className={!openMenu ? '' : 'open'} />
        </HeaderContiner>
    )
}

export default Header
