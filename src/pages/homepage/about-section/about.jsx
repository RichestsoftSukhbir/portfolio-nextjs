import text from '@/config/text';
import {motion} from 'framer-motion';

const { aboutText } = text;

export default function About() {

    function textGen() {
        let texts = [];
        let count = Object.keys(aboutText).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <motion.p initial={{opacity:0, y: 50}} whileInView={{opacity:1, y: 0}} transition={{duration:.5}} className='mb-3' key={i} dangerouslySetInnerHTML={{ __html: aboutText[i] }} />
            )
            texts.push(textItems);
        }
        return texts;
    }

    const options = {
        initial: {
            opacity:0,
            y:50
        },
        whileInView: {
            opacity:1,
            y:0
        },
        transition: {
            duration: .5
        }
    }

    return (
        <section className="about-section spacer-y">
            <div className="container">
                <motion.h2 {...options} dangerouslySetInnerHTML={{ __html: text.titles.about }} className='mb-40' />
                {textGen()}
            </div>
        </section>
    )
}