import Image from 'next/image'
import styled from 'styled-components'

import Container from '../components/Container'
import TextContainer from '../components/TextContainer'
import AgentsSection from '../components/pages/agents/AgentsSection'

import ArtRarity from '../public/agents/Art-Update-Background Rarity.webp'
import GoldenApple from '../public/agents/Golden-Apple.webp'

import AgentsList from '../data/data.agents.json'

export const getStaticProps = () => {
    return {
        props: {
            agents: AgentsList
        }
    }
}

const RarityContainer = styled.div`
    max-width:700px;
`

const Agents = ({ agents }) => {
    return (
        <Container>
            <div className='container d-flex pt-5'>
                <div className='col-md-7'>
                    <TextContainer spacing={4} inBg={true}>
                        <h2>Rarity</h2>
                        <p>
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                        </p>
                    </TextContainer>
                    <TextContainer spacing={4}>
                        <p>
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                        </p>
                    </TextContainer>
                </div>
                <div className='col-md-5'>
                    <Image
                        alt='Golden Apple'
                        src={GoldenApple}
                        width={600}
                        height={600}
                    />
                </div>
            </div>

            <div className='pb-5'>
                {agents.map((agent, index) => (
                    index % 2 == 0 ?
                        <AgentsSection
                            key={agent.id}
                            headerBg={agent.agent_header}
                            smIcon={agent.agent_logo}
                            background={agent.agent_bg}
                            charImg={agent.agent_character}
                            text={agent.agent_text}
                            right={true}
                        />
                        :
                        <AgentsSection
                            key={agent.id}
                            headerBg={agent.agent_header}
                            smIcon={agent.agent_logo}
                            background={agent.agent_bg}
                            charImg={agent.agent_character}
                            text={agent.agent_text}
                        />
                ))}
            </div>
            <div className='container'>
                <RarityContainer className='d-flex justify-content-center align-items-center row m-auto'>
                    <div className='col-md-6'>
                        <h2>Rarity</h2>
                        <p>
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                            Sed fermentum egestas <br />
                        </p>
                    </div>
                    <div className='d-flex justify-content-center col-md-6'>
                        <Image
                            alt='Golden Apple'
                            src={GoldenApple}
                            width={600}
                            height={600}
                        />
                    </div>
                </RarityContainer>
                <TextContainer spacing={4} inBg={true}>
                    <p>
                        Sed fermentum egestas massa vitae porta. Vestibulum ut velit eleifend, scelerisque libero sed, pulvinar augue. Ut luctus arcu ut pellentesque tincidunt. Praesent tempor bibendum quam, vel aliquam leo aliquet vel. Nam vitae nibh mattis, tincidunt orci nec, aliquam sapien. Nunc commodo arcu nec tellus ullamcorper, et fringilla quam sodales. Morbi commodo sapien nec placerat porttitor. Nulla facilisi.
                    </p>
                </TextContainer>
                <TextContainer spacing={4}>
                    <p>
                        Sed fermentum egestas massa vitae porta. Vestibulum ut velit eleifend, scelerisque libero sed, pulvinar augue. Ut luctus arcu ut pellentesque tincidunt. Praesent tempor bibendum quam, vel aliquam leo aliquet vel. Nam vitae nibh mattis, tincidunt orci nec, aliquam sapien. Nunc commodo arcu nec tellus ullamcorper, et fringilla quam sodales. Morbi commodo sapien nec placerat porttitor. Nulla facilisi.
                    </p>
                </TextContainer>
                <div className='text-center pb-5'>
                    <Image
                        alt='Art Rarity'
                        src={ArtRarity}
                        width={700}
                        height={700}
                    />
                </div>
            </div>
        </Container >
    )
}

export default Agents
