import styled, { createGlobalStyle, keyframes } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import CastleBackground from '../public/castle-bg.png'

const fadeInAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const fadeOutAnimation = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    * {
        outline: none;
        line-height: 1.4;
    }

    html, body {
        font-size:16px;
    }

    body {
        color: #fff;
        font-family: 'Shadows Into Light', cursive;
        text-transform:uppercase;
    }

    h1, h2, h3 {
        font-family: 'Permanent Marker', cursive;
    }

    p, a {
        font-size:1.31rem;
    }
    
    h1 {
        font-size:3rem;
    }

    h2 {
        font-size:2.37rem;
    }

    h3 {
        font-size:2rem;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    button {
        all:unset;

        &:not(:disabled) {
            all:unset;
            cursor:pointer;
        }

        &.button {
            padding:3px 20px;
            border-radius:10px;
            transition: all 150ms ease-in-out;
        }

        &.button-white {
            color:#000;
            border-color: #fff;
            box-shadow: 0 0 40px 40px #fff inset, 0 0 0 0 #fff;

            &:hover {
                color:#fff;
                box-shadow: 0 0 4px 0 #fff inset, 0 0 8px 1px #fff;
            }
        }

        &.button-black {
            color:#fff;
            border-color: #000;
            box-shadow: 0 0 40px 40px #000 inset, 0 0 0 0 #000;

            &:hover {
                color:#fff;
                box-shadow: 0 0 4px 0 #fff inset, 0 0 8px 1px #fff;
            }
        }
    }

    a, button,
    input[type="submit"] {
        transition: all 300ms ease-in-out;
    }
    
    .open {
        visibility:visible;
        animation: .4s ${fadeInAnimation} ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .close {
        animation: 1s ${fadeOutAnimation} ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
`

const MainWrapperBg = styled.main`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${CastleBackground.src});
`;

const MainWrapper = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <MainWrapperBg>
                <Header />
                {children}
            </MainWrapperBg>
            <Footer />
        </>
    )
}

export default MainWrapper
