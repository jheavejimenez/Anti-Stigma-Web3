import styled from "styled-components"

import TextContainer from '../../TextContainer'

const Content = styled.div`
`

const Circle = styled.div`
    border-radius:100%;
    border 10px solid #${({color}) => color};
    width:80px;
    height:80px;

    h4 {
        color: #${({color}) => color};
        font-weight:600;
    }
`

function PhaseList({ children, list, color }) {
    return (
        <Content className="d-flex align-items-center">
            <Circle color={color} className="d-flex justify-content-center align-items-center me-4">
                <h4 className="m-0">{list}</h4>
            </Circle>
            <TextContainer inBg={true}>
                {children}
            </TextContainer>
        </Content>
    )
}

export default PhaseList