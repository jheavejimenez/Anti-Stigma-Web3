import styled from 'styled-components'

const BootstrapContainer = styled.div`
    
`

export const Wrapper = ({ children, parentClassName, contentClassName }) => (
    <BootstrapContainer
        className={parentClassName ? `${parentClassName} container d-flex` : 'container d-flex'}
    >
        <div
            className={contentClassName ? contentClassName : 'col-md-12'}
        >
            {children}
        </div>
    </BootstrapContainer>
)