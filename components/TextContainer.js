import styled from "styled-components";

const Container = styled.div`

    * {
        line-height: 1.6;
    }
    
    &.text-container-bg {
        background:rgba(0, 0, 0, 0.3);

        > *:last-child {
            margin-bottom:0;
        }
    }
`

const TextContainer = ({ children, inBg, spacing, }) => (
    <Container className={`p-${ spacing ? spacing : '3'} ${inBg ? 'text-container-bg' : ''}`}>
        {children}
    </Container>
);

export default TextContainer;
