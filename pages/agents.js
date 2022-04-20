import Image from 'next/image'

import { NextSeo } from 'next-seo';
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
        <>
            <NextSeo
                title="Agents"
            />
            <Container>
                <div className='container d-flex pt-5'>
                    <div className='col-md-7'>
                        <TextContainer spacing={4} inBg={true}>
                            <h2>ANTI-STIGMA</h2>
                            <p>THE PROJECT WILL HAVE 10,000 UNIQUE CHARACTERS CALLED &quot;ANTI-STIGMAS&quot; BOTH CODE-GENERATED AND CUSTOM-MADE.</p>
                        </TextContainer>
                        <TextContainer spacing={4}>
                            <p>THE COLLECTION HAS 7 CHARACTERS WHERE EACH CHARACTER REPRESENTS MENTAL STRUGGLE.</p>
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
                                5,250 COMMON ANTI-STIGMAS <br />
                                2,450 RARE ANTI-STIGMAS <br />
                                1,050 SUPER RARE ANTI-STIGMAS <br />
                                413 EVENT-BASED ANTI-STIGMAS <br />
                                420 MONTHLY HOLIDAY ANTI-STIGMAS <br />
                                413 COLLABORATION ANTI-STIGMAS
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
                        <p>SPECIAL CLASS ANTI-STIGMAS SUCH AS EVENT, HOLIDAY, COLLAB BASED ARE AVAILABLE ON OUR OPENSEA. ALPHA CLASS ANTI-STIGMAS THAT ARE COMMON, RARE, AND SUPER RARE WILL BE AVAILABLE ON OUR MINTING PAGE.</p>
                    </TextContainer>
                    <TextContainer spacing={4}>
                        <p>BESIDES THE DIFFERENT PARTS OF THE ANTI-STIGMAS, RARITIES CAN ALSO BE DETERMINED BY THEIR BACKGROUND.</p>
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
            </Container>
        </>
    )
}

export default Agents
