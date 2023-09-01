import styles from './experience.module.css';
import text from '@/config/text';
import { motion } from 'framer-motion';
import { FaFileArrowDown } from 'react-icons/fa6';

const { experiences } = text;

export default function Experience() {

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

    function expGen() {
        let expList = [];
        let count = Object.keys(experiences).length;

        for (let i = 1; i <= count; i++) {
            let expData = (
                <motion.li {...options} key={i} className={styles['exp-list']}>
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-5 col-md-6">
                            <motion.h3 {...options} className="designation mb-4">{experiences[i].designation}</motion.h3>
                            <motion.p {...options} className="company-name h5 fw-bold mb-0 primary-color">{experiences[i].companyName}</motion.p>
                            <motion.p {...options} className="company-name opacity-50 small fst-italic mb-0">{experiences[i].year}</motion.p>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <motion.p {...options} transition={{duration:.5, delay:.3}} className='mb-0' dangerouslySetInnerHTML={{ __html: experiences[i].description }} />
                        </div>
                    </div>
                </motion.li>
            )
            expList.push(expData);
        }

        return expList;
    }


    return (
        <section className="work-experience spacer-y">
            <div className="container">
                <motion.h2 {...options} dangerouslySetInnerHTML={{ __html: text.titles.experience }} />
                <motion.p {...options} transition={{ duration: .5, delay: .3 }} className='mb-40'>Here&apos;s a brief rundown of my most recent experiences.</motion.p>
                <div className={`${styles['experience-wrap']} mb-40`}>
                    <ul className='list-unstyled m-0'>
                        {expGen()}
                    </ul>
                </div>
                <motion.a {...options} href='/docs/sukh_resume.pdf' className="theme_button">:resume() <FaFileArrowDown /></motion.a>
            </div>
        </section>
    )
}