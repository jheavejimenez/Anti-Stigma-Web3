import Image from 'next/image'
import styled from 'styled-components'

import Container from '../components/Container'
import PhaseSection from '../components/pages/roadmap/PhaseSection'
import PhaseList from '../components/pages/roadmap/PhaseList'
import PhaseListImage from '../components/pages/roadmap/PhaseListImage'

import RoadmapImage from '../public/roadmap/roadmap-header.webp'
import zeroPercentImg from '../public/roadmap/0-percent-image.webp'
import tenPercentImg from '../public/roadmap/10-percent-image.webp'
import twentyPercentImg from '../public/roadmap/20-percent-image.webp'

import asd from '../public/1.png'

const Content = styled.div`
    .container {
        @media (min-width: 992px) {
            max-width: 900px;
        }
    }
`


const Roadmap = () => {
    return (
        <Container>
            <Content>
                <div className="d-flex justify-content-center align-items-center">
                    <Image
                        src={RoadmapImage}
                        width={230}
                        height={230}
                    />
                </div>

                <PhaseSection title='Phase 1' color='7FAE98'>
                    <div className="d-flex align-items-center pb-3">
                        <div className="col-md-7">
                            <PhaseList list='0%' color='7FAE98'>
                                <ul className='ps-3'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Quaerat nulla nemo molestias libero!</li>
                                    <li>Aspernatur repellat debitis odit impedit!</li>
                                    <li>Expedita facilis inventore ab et.</li>
                                </ul>
                            </PhaseList>
                        </div>
                        <PhaseListImage
                            alt='Zero Percent Image'
                            src={zeroPercentImg}
                        />
                    </div>
                    <div className="d-flex align-items-center pb-3">
                        <div className="col-md-7">
                            <PhaseList list='10%' color='7FAE98'>
                                <ul className='ps-3'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Fugiat aliquam dolorum harum architecto?</li>
                                    <li>Vitae quia obcaecati fugit eum?</li>
                                    <li>Cupiditate deleniti aperiam aliquam? Laborum?</li>
                                </ul>
                            </PhaseList>
                        </div>
                        <PhaseListImage
                            alt='Ten Percent Image'
                            src={tenPercentImg}
                            height={280}
                        />
                    </div>
                    <div className="d-flex align-items-center pb-3">
                        <div className="col-md-7">
                            <PhaseList list='20%' color='7FAE98'>
                                <ul className='ps-3'>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Expedita vel fugiat quae aspernatur?</li>
                                </ul>
                            </PhaseList>
                        </div>
                        <PhaseListImage
                            alt='Twenty Percent Image'
                            src={twentyPercentImg}
                        />
                    </div>
                </PhaseSection>

                <PhaseSection title='Phase 2' color='32EDF0'>
                    <div className="d-flex pb-3">
                        <PhaseList list='40%' color='32EDF0'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Quaerat nulla nemo molestias libero!</li>
                                <li>Aspernatur repellat debitis odit impedit!</li>
                                <li>Expedita facilis inventore ab et.</li>
                            </ul>
                        </PhaseList>
                    </div>
                    <div className="d-flex pb-3">
                        <PhaseList list='50%' color='32EDF0'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Fugiat aliquam dolorum harum architecto?</li>
                                <li>Vitae quia obcaecati fugit eum?</li>
                                <li>Cupiditate deleniti aperiam aliquam? Laborum?</li>
                            </ul>
                        </PhaseList>
                    </div>
                </PhaseSection>

                <PhaseSection title='Phase 3' color='7CA3F3'>
                    <div className="d-flex pb-3">
                        <PhaseList list='70%' color='7CA3F3'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Quaerat nulla nemo molestias libero!</li>
                                <li>Aspernatur repellat debitis odit impedit!</li>
                                <li>Expedita facilis inventore ab et.</li>
                            </ul>
                        </PhaseList>
                    </div>
                    <div className="d-flex pb-3">
                        <PhaseList list='80%' color='7CA3F3'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Fugiat aliquam dolorum harum architecto?</li>
                                <li>Vitae quia obcaecati fugit eum?</li>
                                <li>Cupiditate deleniti aperiam aliquam? Laborum?</li>
                            </ul>
                        </PhaseList>
                    </div>
                </PhaseSection>

                <PhaseSection title='Phase 4' color='EEBC43'>
                    <div className="d-flex pb-3">
                        <PhaseList list='90%' color='EEBC43'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Quaerat nulla nemo molestias libero!</li>
                                <li>Aspernatur repellat debitis odit impedit!</li>
                                <li>Expedita facilis inventore ab et.</li>
                            </ul>
                        </PhaseList>
                    </div>
                    <div className="d-flex pb-3">
                        <PhaseList list='100%' color='EEBC43'>
                            <ul className='ps-3'>
                                <li>Lorem ipsum dolor sit amet.</li>
                                <li>Fugiat aliquam dolorum harum architecto?</li>
                                <li>Vitae quia obcaecati fugit eum?</li>
                                <li>Cupiditate deleniti aperiam aliquam? Laborum?</li>
                            </ul>
                        </PhaseList>
                    </div>
                </PhaseSection>
            </Content>
        </Container>
    )
}

export default Roadmap
