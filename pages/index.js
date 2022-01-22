import styled from 'styled-components'

import HeroBanner from '../components/HeroBanner'
import Container from '../components/Container'
import Agents from '../data/data.agents.json'

const IntroWrapper = styled.div`

    .intro-wrapper__content {
        max-width:800px;
        border-top:3px solid #fff;
        border-bottom:3px solid #fff;
    }
`

export const getStaticProps = () => {
    return {
        props: {
            agents: Agents
        }
    }
}

const Home = ({ agents }) => {
    return (
        <Container>
            <HeroBanner />
            <IntroWrapper className='container p-4'>
                <div className='intro-wrapper__content mx-auto text-center p-3'>
                    <p className='mb-0'>Anti-stigma society is a NFT movement that aims to raose mental health awareness. A communitiy-driven project focused on differently-abled</p>
                </div>
            </IntroWrapper>
            {/* {agents.map(agent => (
                <h3 key={agent.id}>
                    {agent.name}
                </h3>
            ))} */}
        </Container>
    )
}

export default Home;