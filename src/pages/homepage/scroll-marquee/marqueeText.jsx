import Image from 'next/image';
import styles from './marqueeText.module.css';
import Marquee from "react-fast-marquee";
import { prompt } from '@/utils/fonts';
import text from '@/config/text';

const { roles } = text;

export default function MarqueeText() {

    function rolesGen() {
        let text = [];
        let count = Object.keys(roles).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <div className={`${styles['marquee-wrapper']} ${prompt.className}`} key={i}>
                    <h5 className='mb-0'>{roles[i]}</h5>
                    <Image width={20} height={20} src="/images/sparkel.svg" alt="" />
                </div>
            )
            text.push(textItems);
        }
        return text;
    }

    return (
        <section className={`${styles['name-maruqee-wrap']} position-relative z-2`}>
            <div className={`${styles['name-maruqee']} py-3`}>
                <Marquee className='overflow-hidden' autoFill="true">
                    {rolesGen()}
                </Marquee>
            </div>
        </section>
    )
}