// import SpotifyPlaying from "@/components/spotify/spotifyPlaying"
import About from "./homepage/about-section/about"
import Intro from "./homepage/intro-section/intro"
import Social from "./homepage/social-section/social"
import MarqueeText from "./homepage/scroll-marquee/marqueeText"

export default function Index() {
    return(
        <main>
            <Intro/>
            <MarqueeText/>
            <About/>
            <Social/>
        </main>
    )
}