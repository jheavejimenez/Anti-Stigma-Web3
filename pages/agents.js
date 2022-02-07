import Container from '../components/Container'
import AgentsSection from '../components/pages/agents/AgentsSection'

import AgentsList from '../data/data.agents.json'


import AgentIcon from '../public/agents/jolly-boy-title.webp'

export const getStaticProps = () => {
    return {
        props: {
            agents: AgentsList
        }
    }
}

const Agents = ({ agents }) => {
    return (
        <Container>


            {agents.map(agent => (
                <AgentsSection
                    headerBg={agent.agent_header}
                    smIcon={agent.agent_logo}
                    background={agent.agent_bg}
                    text={agent.agent_header}
                />
            ))}
        </Container>
    )
}

export default Agents
