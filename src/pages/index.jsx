import SpotifyPlaying from "@/components/spotify/spotifyPlaying"
import About from "./homepage/about-section/about"
import Intro from "./homepage/intro-section/intro"
import Social from "./homepage/social-section/social"

export default function Index() {
    return(
        <main>
            <Intro/>
            <About/>
            <Social/>
            <SpotifyPlaying/>
        </main>
    )
}