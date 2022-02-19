import Image from 'next/image'
import styled from 'styled-components'

import Container from '../components/Container'
import TextContainer from '../components/TextContainer'
import PhaseSection from '../components/pages/roadmap/PhaseSection'
import PhaseList from '../components/pages/roadmap/PhaseList'

import RoadmapImage from '../public/roadmap/roadmap-header.webp'

const Roadmap = () => {
    return (
        <Container>
            <div className="d-flex justify-content-center align-items-center">
                <Image
                    src={RoadmapImage}
                    width={300}
                    height={300}
                />
            </div>
            <PhaseSection title='Phase 1'>
                <PhaseList list='1%' color='7FAE98'>
                    <TextContainer inBg={true}>
                        <ul>
                            <li>Lorem ipsum dolor sit amet.</li>
                            <li>Quaerat nulla nemo molestias libero!</li>
                            <li>Aspernatur repellat debitis odit impedit!</li>
                            <li>Expedita facilis inventore ab et.</li>
                        </ul>
                    </TextContainer>
                </PhaseList>
            </PhaseSection>
        </Container>
    )
}

export default Roadmap
