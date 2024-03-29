import { createGlobalStyle, keyframes } from 'styled-components';

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

export default createGlobalStyle`
    :root {
        --black: #000;
        --white: #fff;
        --purple: #7e4eaf;
    }

    *, *::after, *::before {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    * {
        outline: none!important;
        line-height: 1.4;
    }

    html, body {
        font-size:16px;
    }

    body {
        color: var(--white);
        font-family: 'Shadows Into Light', cursive;
        text-transform:uppercase;

        &.overflow-hidden {
            header.container {

                @media (max-width:768px) {
                    position:inherit!important;
                }

                .header-container__button-menu {
                    z-index:9;
                }
            }

            &:after {
                position:absolute;
                background:rgba(0, 0, 0, 0.6);
                width:100%;
                height:100%;
                content:"";
                top:0;
            }
        }
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
    
    .container {
        @media (min-width: 1400px) {
            max-width: 1140px;
        }
    }

    .open {
        visibility:visible!important;
        animation: .4s ${fadeInAnimation} ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .close {
        animation: 1s ${fadeOutAnimation} ease-in-out;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }

    .slick-dots {
        li {
            button {
                &:before {
                    opacity:1;
                    font-size:20px;
                    color:#fff;
                }

                &:hover:before {
                    opacity:0.7;
                    color:#596FC4;
                }
            }

            &.slick-active {
                button::before {
                    opacity:1;
                    color:#596FC4;
                }
            }
        }
    }

    .ant-notification-notice-message {
        font-weight:700;
        color:var(--black);
    }
`