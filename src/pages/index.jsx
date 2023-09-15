import Head from "next/head"
import About from "./homepage/about-section/about"
import Intro from "./homepage/intro-section/intro"
import Social from "./homepage/social-section/social"
import MarqueeText from "./homepage/scroll-marquee/marqueeText"
import Experience from "./homepage/experience/experience"
import RecentWatch from "./homepage/recent-watch/recentWatch"

export default function Index() {
    return (
        <>
            <Head>
                <title>Sukh - Professional Web &#38; Graphic Desinger</title>
            </Head>
            <main>
                <Intro />
                <MarqueeText />
                <About />
                <Experience/>
                <RecentWatch/>
                <Social />
            </main>
        </>
    )
}