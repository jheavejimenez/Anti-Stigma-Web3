import Image from 'next/image'

import styled from 'styled-components'

import LogoColored from '../public/logo-colored.png'
import HeroBannerImage from '../public/hero-banner.png'

const Banner = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${HeroBannerImage.src});
    min-height:400px;

    > * {
        padding:0 15px
    }

    .hero-banner__content {
        text-transform:uppercase;
        position:relative;
        padding-bottom:25px;

        h4 {
            margin:0;
        }

        ::after {
            content:"";
            position:absolute;
            width:100%;
            height:15px;
            background-color:#7e4eaf;
            left:0;
            bottom:0;
        }
    }
`

function HeroBanner() {
    return (
        <Banner className='w-100 d-flex align-items-center'>
            <div className='d-flex justify-content-between align-items-center container'>
                <Image
                    src={LogoColored}
                    width={350}
                    height={350}
                />
                <div className='hero-banner__content text-end'>
                    <h4>Welcome to the</h4>
                    <h2>Anti-Stigma Society</h2>
                </div>
            </div>
        </Banner>
    )
}

export default HeroBanner
