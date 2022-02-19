import styled from "styled-components"

const Content = styled.header`

`

function PhaseSection({ children, title }) {
    return (
        <Content className="container">
            <h2 className="text-center">{title}</h2>
            {children}
        </Content>
    )
}

export default PhaseSection