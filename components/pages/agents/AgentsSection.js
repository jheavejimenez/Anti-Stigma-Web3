import Image from 'next/image'

import styled from "styled-components";
import { motion } from "framer-motion"

const AgentList = styled(motion.section)`
    background-image:url(${({ background }) => background});
    overflow-x: hidden;
    
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

const agentListVariant = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren"
        }
    },
}

const doodleVariant = (direction) => {
    return {
        hidden: {
            opacity: 0,
            x: direction ? '-50vw' : '50vw'
        },
        visible: {
            opacity: 1,
            x: direction ? '0' : '0',
            transition: {
                duration: 0.8,
            }
        },
    }
}

const swingingVariant = {
    swing: {
        rotate: [3, -3],
        transition: {
            yoyo: Infinity
        }
    }
}

const AgentsSection = ({ headerBg, smIcon, background, charImg, text, right, }) => {
    return (
        <AgentList
            className='position-relative'
            variants={agentListVariant}
            initial='hidden'
            animate='visible'
        >
            <Image
                alt='headerBg'
                src={background}
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <motion.article
                className={`d-flex container ${right ? 'justify-content-end section-end' : 'section-start'}`}
                variants={agentListVariant}
                initial='hidden'
                whileInView='visible'
                viewport={{
                    once: true,
                    margin: '-300px'
                }}
            >
                <div className='agent-list__logo-icon'>
                    <Image
                        alt='smIcon'
                        src={smIcon}
                        width={80}
                        height={80}
                    />
                </div>
                <motion.div
                    className={`col-md-7 d-flex ${!right ? 'order-2' : ''}`}
                    variants={doodleVariant(right)}
                >
                    <Image
                        alt='charImg'
                        src={charImg}
                        width={710}
                        height={400}
                    />
                </motion.div>
                <motion.div
                    className='agent-list__content col-md-5 py-3'
                    variants={doodleVariant(!right)}
                >
                    <motion.div
                        className='text-center mb-3'
                        variants={swingingVariant}
                        animate='swing'
                    >
                        <Image
                            alt='headerBg'
                            src={headerBg}
                            width={300}
                            height={150}
                        />
                    </motion.div>
                    <p>{text}</p>
                </motion.div>
            </motion.article>
        </AgentList>
    );
};

export default AgentsSection;
