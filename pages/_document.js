import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" id="top">
            <Head>
                <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg?v=3" />
                <link rel="preconnect" href="https://fonts.bunny.net" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=montserrat:200,300,400,500,600,700|vidaloka:400&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
