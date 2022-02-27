import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Container from '../components/Container'

import LandingImage from '../public/ASS-BASE-unlit.webp'

const EnterCastleWrapper = styled.div`
    width:100%;
    z-index:99;
    bottom:50px;

    button.button-black {
        font-size:2rem;
        color:#fff;
        font-family: 'Permanent Marker', cursive;
        border-radius:10px;

        &:hover {
            color:#fff;
        }
    }
`

const Home = () => {
    return (
        <Container className='position-relative'>
            <Image
                alt='LandingImage'
                src={LandingImage}
                layout="fill"
                objectFit="cover"
                objectPosition={'top'}
                quality={100}
            />
            <EnterCastleWrapper className='position-absolute text-center'>
                <Link href='/home'>
                    <button className='px-4 py-2 button button-black'>Enter the castle</button>
                </Link>
                <h5 className='my-2'>Click this Button</h5>
            </EnterCastleWrapper>
        </Container>
    )
}

export default Home;