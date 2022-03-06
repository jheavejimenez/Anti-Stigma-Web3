import { NextSeo } from 'next-seo';
import styled from 'styled-components'
import Image from 'next/image'

import HeroBanner from '../components/HeroBanner'
import Container from '../components/Container'
import Slider from '../components/SliderContainer'

import AgentSlides from '../data/data.agent-slides.json'

const IntroWrapper = styled.section`
    .intro-wrapper__content {
        max-width:800px;
        border-top:3px solid #fff;
        border-bottom:3px solid #fff;
    }
`

const AgentsWrapper = styled.section`
    .agents-wrapper__content-text {
        background:rgba(0, 0, 0, 0.4);
    }

    .agents-wrapper__button {
        font-size:1.125rem;
    }
`
export const getStaticProps = () => {
    return {
        props: {
            slides: AgentSlides
        }
    }
}

const HomeInside = ({ slides, }) => {
    return (
        <>
            <NextSeo
                title="Castle"
            />
            <Container>
                <HeroBanner />
                <IntroWrapper className='container p-4 my-3'>
                    <div className='intro-wrapper__content mx-auto text-center p-3'>
                        <p className='mb-0'>Anti-stigma society is a NFT movement that aims to raose mental health awareness. A communitiy-driven project focused on differently-abled</p>
                    </div>
                </IntroWrapper>
                <AgentsWrapper className='container py-5'>
                    <div className='d-flex row'>
                        <div className='col-4 order-md-last'>
                            <Slider>
                                {slides.map(slide => (
                                    <Image
                                        key={slide.id}
                                        alt={slide.name}
                                        src={slide.slide_src}
                                        width='400'
                                        height='400'
                                    />
                                ))}
                            </Slider>
                        </div>
                        <div className='agents-wrapper__block col-8 order-md-first'>
                            <div className='agents-wrapper__content-text p-4 mb-3 rounded-3'>
                                <h2>Agents</h2>
                                <p>The project will have 10,000 unique characters called &quot;Agents&quot; both code-generated and custome-made for monthly holiday drops and special collaborations.</p>
                            </div>
                            <button className='button button-white agents-wrapper__button'>More Info</button>
                        </div>
                    </div>
                </AgentsWrapper>
            </Container>
        </>
    )
}

export default HomeInside;