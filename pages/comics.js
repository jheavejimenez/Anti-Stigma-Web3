import Image from 'next/image'

import { NextSeo } from 'next-seo';
import styled from 'styled-components'

import Container from '../components/Container'

import ComicsList from '../data/data.comics.json'
import RoadmapImage from '../public/comics/comic-header.webp'

const Content = styled.div`
    .container {
        @media (min-width: 992px) {
            max-width: 900px;
        }
    }
`
export const getStaticProps = () => {
    return {
        props: {
            comics: ComicsList
        }
    }
}

const Comics = ({ comics }) => {
    return (
        <>
            <NextSeo
                title="Comics"
            />

            <Container>
                <Content>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image
                            alt='Comics Header'
                            src={RoadmapImage}
                            width={230}
                            height={230}
                        />
                    </div>

                    {comics.map((comic, index) => (
                        <div className="d-block text-center pb-5" key={`comic-${index}`}>
                            <Image
                                alt={comic.name}
                                src={comic.url}
                                width={600}
                                height={600}
                            />
                        </div>
                    ))}
                    <h2 className='m-0 pb-5 text-center'>We will add more comics soon!</h2>
                </Content>
            </Container>
        </>
    )
}

export default Comics
