import styled from "styled-components";

const Main = styled.main`
    // padding: 20px
`;

const Container = ({ children, className }) => {
    return (
        <Main className={className}>
            {children}
        </Main>
    )
}

export default Container
