
import { useState, createContext, } from "react";
import Script from "next/script"
import { DefaultSeo } from 'next-seo'
import "../styles/antd.less";

import GlobalStyle from '../styles/GlobalStyle';
import MainWrapper from '../components/MainWrapper'
import Modal from '../components/ModalContainer'

export const AppContext = createContext({})

function MyApp({ Component, pageProps, }) {
    const [modalAttr, setModalAttr] = useState('sample')

    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Anti-Stigma Society"
                defaultTitle='Anti-Stigma Society'
            // openGraph={{
            //     type: 'website',
            //     locale: 'en_US',
            //     url: 'https://wwww.manuelkruisz.com/',
            // }}
            />
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossOrigin="anonymous" />

            <AppContext.Provider value={{ modalAttr, setModalAttr, }}>
                <MainWrapper>
                    <GlobalStyle />
                    <Component {...pageProps} />
                    <Modal />
                </MainWrapper>
            </AppContext.Provider>
        </>
    )
}

export default MyApp
