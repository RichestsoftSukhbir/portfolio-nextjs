import Head from "next/head";
import WorkIntro from "./workpage/workIntro";
import Experience from "./homepage/experience/experience";

export default function Work() {
    return(
        <>
            <Head>
                <title>Work - Web &#38; Graphic Design Expertise | SukhFX</title>        
            </Head>
            <Experience/>
            <WorkIntro/>
        </>
    )
}