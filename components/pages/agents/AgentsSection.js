import Image from 'next/image'

import styled from "styled-components";

const AgentList = styled.section`
    background-image:url(${({ background }) => background});

    article {
        position:relative;
        z-index:9;
        color:var(--black);

        > .agent-list__logo-icon {
            position:absolute;
        }

        &.section-start {
            > .agent-list__logo-icon {
                top: 0;
                right: 0;
            }
        }

        &.section-end {
            > .agent-list__logo-icon {
                bottom:0;
                left:0;
            }
        }
    }
`

const AgentsSection = ({ headerBg, smIcon, background, charImg, text, right, }) => {
    return (
        <AgentList className='position-relative'>
            <Image
                src={background}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <article className={`d-flex container ${right ? 'justify-content-end section-end' : 'section-start'}`}>
                <div className='agent-list__logo-icon'>
                    <Image
                        src={smIcon}
                        width={80}
                        height={80}
                    />
                </div>
                <div className={`col-md-7 d-flex ${!right ? 'order-2' : ''}`}>
                    <Image
                        src={charImg}
                        width={710}
                        height={400}
                    />
                </div>
                <div className='agent-list__content col-md-5 py-3'>
                    <div className='text-center mb-3'>
                        <Image
                            src={headerBg}
                            width={300}
                            height={150}
                        />
                    </div>
                    <p>{text}</p>
                </div>
            </article>
        </AgentList>
    );
};

export default AgentsSection;
