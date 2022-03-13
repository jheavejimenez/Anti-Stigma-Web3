import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import CastleBackground from '../public/castle-bg.png'

const MainWrapperBg = styled.main`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${CastleBackground.src});
`;

const MainWrapper = ({ children }) => {
    return (
        <>
            <MainWrapperBg>
                <Header />
                {children}
            </MainWrapperBg>
            <Footer />
        </>
    )
}

export default MainWrapper
