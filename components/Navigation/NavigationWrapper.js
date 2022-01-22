import styled from 'styled-components'

const NavigationContainer = styled.div`

    h3 {
        background-color:#7e4eaf;
    }

    .navigation-wrapper__content {
        background-color:#fff;
    }
`;

const NavigationWrapper = ({ title, children }) => {
    return (
        <NavigationContainer className='p-1 text-center'>
            <div className='navigation-wrapper__content'>
                <h3 className='p-2 m-0'>{title}</h3>
                <nav>
                    <ul className='p-2 px-3 m-0 text-start'>
                        {children}
                    </ul>
                </nav>
            </div>
        </NavigationContainer>
    );
};

export default NavigationWrapper;
