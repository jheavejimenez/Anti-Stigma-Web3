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
    * {
        box-sizing: border-box;
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
        font-size:21px;
    }

    a {
        color: inherit;
        text-decoration: none;
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
