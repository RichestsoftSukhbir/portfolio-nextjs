import styles from './recentWatch.module.css';
import { motion } from 'framer-motion';
import text from '@/config/text';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import 'overlayscrollbars/overlayscrollbars.css';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

const { watch } = text;

export default function RecentWatch() {

    const options = {
        initial: {
            opacity: 0,
            y: 50
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: .5
        }
    }

    return (
        <section className={`recent-watch spacer-y`}>
            <div className="container">
                <motion.h2 {...options} dangerouslySetInnerHTML={{ __html: text.titles.recent }}></motion.h2>
                <motion.p {...options} className='mb-40'>{text.subText.recentSub}</motion.p>
                <OverlayScrollbarsComponent element="div" className={`${styles['watch-wrap']}`} defer>
                    {Object.keys(watch).map((data) => {
                        return (
                            <motion.div {...options} className={`${styles['watch-card']}`} key={data}>
                                <div className={`${styles['poster']}`}>
                                    <div className={`${styles['status']} ${styles[`${watch[data].status.toLowerCase()}`]}`}>
                                        {watch[data].status}
                                    </div>
                                    <Image src={watch[data].poster} width={170} height={241} alt={watch[data].name} />
                                </div>
                                <div className={styles['watch-content']}>
                                    <div className={`${styles['info']} mb-2`} title={watch[data].name}>{watch[data].name}</div>
                                    <div className={`${styles['tag-rating']}`}>
                                        <div className={`${styles['category']} small opacity-50`}>{watch[data].category}</div>
                                        <div className={`${styles['rating']} small`}>
                                            <FaStar />
                                            <span>{watch[data].rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </OverlayScrollbarsComponent>
            </div>
        </section>
    )
}