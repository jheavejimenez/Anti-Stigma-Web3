import Script from "next/script"

import { DefaultSeo } from 'next-seo'

import MainWrapper from '../components/MainWrapper'

function MyApp({ Component, pageProps, ...appProps }) {
    return (
        <>
            <DefaultSeo
                titleTemplate="%s | Anti-Stigma Society"
                defaultTitle = 'Anti-Stigma Society'
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

            <MainWrapper>
                <Component {...pageProps} />
            </MainWrapper>
        </>
    )
}

export default MyApp
