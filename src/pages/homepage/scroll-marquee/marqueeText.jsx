import Image from 'next/image';
import styles from './marqueeText.module.css';
import Marquee from "react-fast-marquee";
import { prompt } from '@/utils/fonts';
import text from '@/config/text';
import {motion} from 'framer-motion';

const { roles } = text;

export default function MarqueeText() {

    function rolesGen() {
        let text = [];
        let count = Object.keys(roles).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <div className={`${styles['marquee-wrapper']} ${prompt.className}`} key={i}>
                    <h5 className='mb-0'>{roles[i]}</h5>
                    <Image width={20} height={20} src="/images/sparkel.svg" alt="sparkel" />
                    <h2 className='secondary-color mb-0'>最強</h2>
                    <span className='small-text text-uppercase text-center'>If You Don’t Take Risks,<br />You Can’t Create A Future.</span>
                    <Image width={20} height={20} src="/images/sparkel.svg" alt="sparkel" />
                </div>
            )
            text.push(textItems);
        }
        return text;

        // 最強 = strongest
        // 主人公 - Protagonist/Main Character
        // 神 - GOD
    }

    const options = {
        initial: {
            opacity:0,
            y:100
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
        <motion.section {...options} className={`${styles['name-maruqee-wrap']} position-relative z-2`}>
            <div className={`${styles['name-maruqee']} py-4`}>
                <Marquee className='overflow-hidden' autoFill="true">
                    {rolesGen()}
                </Marquee>
            </div>
        </motion.section>
    )
}