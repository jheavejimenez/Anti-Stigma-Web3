import styled from "styled-components";

const Main = styled.main`
    min-height: calc(100vh - 195px);
`;

const Container = ({ children, className }) => {
    return (
        <Main className={className}>
            {children}
        </Main>
    )
}

export default Container
