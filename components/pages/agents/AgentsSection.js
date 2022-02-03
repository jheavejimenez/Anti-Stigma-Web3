import Image from 'next/image'

import styled from "styled-components";

const AgentList = styled.section`
    background-image:url(${({ background }) => background});
`

const AgentsSection = ({ headerBg, smIcon, background, text, right, }) => {
    return (
        <AgentList background={background}>
            <article className={`d-flex container ${right ? 'justify-content-end': ''}`}>
                {/* <Image
                    src={smIcon}
                    width={80}
                    height={80}
                /> */}
                <div className='agent-list__content col-md-5'>
                    <Image
                        src={headerBg}
                        width={300}
                        height={300}
                    />
                    <p>{text}</p>
                </div>
            </article>
        </AgentList>
    );
};

export default AgentsSection;
