import Image from 'next/image'

import { NextSeo } from 'next-seo';
import styled from 'styled-components'

import Container from '../components/Container'
import PhaseSection from '../components/pages/roadmap/PhaseSection'
import PhaseList from '../components/pages/roadmap/PhaseList'
import PhaseListImage from '../components/pages/roadmap/PhaseListImage'

import RoadmapImage from '../public/roadmap/roadmap-header.webp'
import zeroPercentImg from '../public/roadmap/0-percent-image.webp'
import tenPercentImg from '../public/roadmap/10-percent-image.webp'
import twentyPercentImg from '../public/roadmap/20-percent-image.webp'
import fortyPercentImg from '../public/roadmap/40-percent-image.webp'
import fiftyPercentImg from '../public/roadmap/50-percent-image.webp'
import seventyPercentImg from '../public/roadmap/70-percent-image.webp'
import eightyPercentImg from '../public/roadmap/80-percent-image.webp'
import ninetyPercentImg from '../public/roadmap/90-percent-image.webp'
import hundredPercentImg from '../public/roadmap/100-percent-image.webp'

const Content = styled.div`
    .container {
        @media (min-width: 992px) {
            max-width: 900px;
        }
    }
`

const Roadmap = () => {
    return (
        <>
            <NextSeo
                title="Roadmap"
            />

            <Container>
                <Content>
                    <div className="d-flex justify-content-center align-items-center">
                        <Image
                            alt='Roadmap Header'
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
                                        <li>PFP PRODUCTION</li>
                                        <li>WEBSITE/DAPP</li>
                                        <li>WHITELIST MECHANICS</li>
                                        <li>COLLABORATIONS</li>
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
                                        <li>THE AS FOUNDATION</li>
                                        <li>CONTESTS AND COMMUNITY GAMES</li>
                                        <li>4 FRAME COMIC STRIPS</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Ten Percent Image'
                                src={tenPercentImg}
                                width={240}
                                height={240}
                            />
                        </div>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='20%' color='7FAE98'>
                                    <ul className='ps-3'>
                                        <li>STAR AGENTS (VIP)</li>
                                        <li>RECOGNITION DAY</li>
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
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='40%' color='32EDF0'>
                                    <ul className='ps-3'>
                                        <li>ASF YOUTUBE CHANNEL</li>
                                        <li>ASF OPERATION TEAM</li>
                                        <li>ASF PRODUCTION TEAM</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={fortyPercentImg}
                            />
                        </div>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='50%' color='32EDF0'>
                                    <ul className='ps-3'>
                                        <li>Lorem ipsum dolor sit amet.</li>
                                        <li>Fugiat aliquam dolorum harum architecto?</li>
                                        <li>Vitae quia obcaecati fugit eum?</li>
                                        <li>Cupiditate deleniti aperiam aliquam? Laborum?</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={fiftyPercentImg}
                            />
                        </div>
                    </PhaseSection>

                    <PhaseSection title='Phase 3' color='7CA3F3'>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='70%' color='7CA3F3'>
                                    <ul className='ps-3'>
                                        <li>ANTI-STIGMA DAY ON METAVERSE</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={seventyPercentImg}
                            />
                        </div>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='80%' color='7CA3F3'>
                                    <ul className='ps-3'>
                                        <li>NEXUS EVENT</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={eightyPercentImg}
                            />
                        </div>
                    </PhaseSection>

                    <PhaseSection title='Phase 4' color='EEBC43'>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='90%' color='EEBC43'>
                                    <ul className='ps-3'>
                                        <li>EVENT LAUNCH</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={ninetyPercentImg}
                            />
                        </div>
                        <div className="d-flex align-items-center pb-3">
                            <div className="col-md-7">
                                <PhaseList list='100%' color='EEBC43'>
                                    <ul className='ps-3'>
                                        <li>ANTI-STIGMA SOCIETY EXPANSION</li>
                                        <li>10K HOLDER GIVEAWAY</li>
                                    </ul>
                                </PhaseList>
                            </div>
                            <PhaseListImage
                                alt='Twenty Percent Image'
                                src={hundredPercentImg}
                            />
                        </div>
                    </PhaseSection>
                </Content>
            </Container>
        </>
    )
}

export default Roadmap
