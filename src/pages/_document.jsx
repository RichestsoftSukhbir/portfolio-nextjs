import { Html, Head, Main, NextScript } from "next/document";


export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel='shortcut icon' href='/images/sukhop-favicon.svg' />
                <link rel="apple-touch-icon" sizes="152x152" href="/images/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/images/favicon/site.webmanifest" />
                <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5319ac" />
                <meta name="msapplication-TileColor" content="#5319ac" />
                <meta name="theme-color" content="#5319ac" />

                <meta name="description" content="Hey, I am Sukhbir Singh. A Front-end Developer/Graphic Designer from India who loves to design and code." />
                <meta name="keywords" content="portfolio sukhfx, portfolio sukhbir, sukhfx skills Sukhop, Sukhbir singh, Sukhop, sukhfxgod" />

                <meta property="og:locale" content="en-IN" />
                <meta property="og:url" content="https://sukhop.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Sukh - Professional Web & Graphic Desinger" />
                <meta property="og:description" content="Hey, I am Sukhbir Singh. A Front-end Developer/Graphic Designer from India who loves to design and code." />
                <meta property="og:image" content="https://sukhop.vercel.app/images/web-preview.webp" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="sukhop.vercel.app" />
                <meta property="twitter:url" content="https://sukhop.vercel.app" />
                <meta name="twitter:title" content="Sukh - Professional Web & Graphic Desinger" />
                <meta name="twitter:description" content="Hey, I am Sukhbir Singh. A Front-end Developer/Graphic Designer from India who loves to design and code." />
                <meta name="twitter:image" content="https://sukhop.vercel.app/images/web-preview.webp" />

                <meta name="google-site-verification" content="shJXyPRlMaH-huGRnJEM7qcmrAN2sXrHT4eFHMi_r3I" />

            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}