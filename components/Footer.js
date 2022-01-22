import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

import DiscordLogo from '../public/socials/discord-logo.png'
import InstagramLogo from '../public/socials/insta-logo.png'
import OpenSeaLogo from '../public/socials/opensea-logo.png'
import TikTokLogo from '../public/socials/tiktok-logo.png'
import TwitterLogo from '../public/socials/twitter-logo.png'

const FooterContainer = styled.footer`
    background-color:#000;
    padding:20px 0;

    > .container * {
        margin:0;
    }

    nav ul {
        list-style:none;

        > li {
            :not(:last-child) {
                margin-right:10px;
            }
        }
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <div className='d-flex justify-content-between align-items-center container'>
                <h4>ANTI-STIGMA SOCIETY</h4>
                <nav>
                    <ul className='d-flex'>
                        <li>
                            <a href='https://opensea.io/' target="_blank">
                                <Image
                                    src={OpenSeaLogo}
                                    width={38}
                                    height={38}
                                />
                            </a>
                        </li>
                        <li>
                            <a href='https://twitter.com/?lang=en' target="_blank">
                                <Image
                                    src={TwitterLogo}
                                    width={38}
                                    height={38}
                                />
                            </a>
                        </li>
                        <li>
                            <a href='https://discord.com/' target="_blank">
                                <Image
                                    src={DiscordLogo}
                                    width={38}
                                    height={38}
                                />
                            </a>
                        </li>
                        <li>
                            <a href='#' target="_blank">
                                <Image
                                    src={InstagramLogo}
                                    width={38}
                                    height={38}
                                />
                            </a>
                        </li>
                        <li>
                            <a href='#' target="_blank">
                                <Image
                                    src={TikTokLogo}
                                    width={38}
                                    height={38}
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </FooterContainer>
    )
}

export default Footer
