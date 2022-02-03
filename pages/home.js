import styled from 'styled-components'

import HeroBanner from '../components/HeroBanner'
import Container from '../components/Container'

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

const HomeInside = () => {
    return (
        <Container>
            <HeroBanner />
            <IntroWrapper className='container p-4 my-3'>
                <div className='intro-wrapper__content mx-auto text-center p-3'>
                    <p className='mb-0'>Anti-stigma society is a NFT movement that aims to raose mental health awareness. A communitiy-driven project focused on differently-abled</p>
                </div>
            </IntroWrapper>
            <AgentsWrapper className='d-flex container py-5'>
                <div className='row'>
                    <div className='col-4 order-md-last'>
                        {/* <Image
                        src={ }
                    /> */}
                        IMAGE HERE
                    </div>
                    <div className='agents-wrapper__block col-8 order-md-first'>
                        <div className='agents-wrapper__content-text p-4 mb-3 rounded-3'>
                            <h2>Agents</h2>
                            <p>The project will have 10,000 unique characters called "Agents" both code-generated and custome-made for monthly holiday drops and special collaborations.</p>
                        </div>
                        <button className='button button-white agents-wrapper__button'>More Info</button>
                    </div>
                </div>
            </AgentsWrapper>
        </Container>
    )
}

export default HomeInside;