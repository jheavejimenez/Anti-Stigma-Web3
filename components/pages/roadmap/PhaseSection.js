import styled from "styled-components"

const Content = styled.header`
    h2 {
        color: #${({color}) => color};
    }
`

function PhaseSection({ children, title, color }) {
    return (
        <Content className="container" color={color}>
            <h2 className="text-center">{title}</h2>
            {children}
        </Content>
    )
}

export default PhaseSection