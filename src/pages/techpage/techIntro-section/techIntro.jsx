import TechCard from '@/components/tech-card/techCard';
import styles from './techIntro.module.css'
import { motion } from 'framer-motion';
import text from '@/config/text';

const { techText, category } = text.techCard;

export default function TechIntro() {

    function techGen() {
        let texts = [];
        let count = Object.keys(techText).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <motion.div className="col-lg-4 col-sm-6"
                    key={i}
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: .5, delay: i * .1 }}>
                    <TechCard nth={i} size={50} />
                </motion.div>
            )
            texts.push(textItems);
        }
        return texts;
    }

    return (
        <section className="tech-card-wrapper spacer-y">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-lg-7 col-md-6">
                        <h1 className='mb-3' dangerouslySetInnerHTML={{ __html: text.titles.tech }}></h1>
                        <p className='mb-4'>A list of my favorite tools and technologies that I use on a regular basis.</p>
                        <ul className={`list-unstyled m-0 ${styles.filterBtnWrap}`}>
                            {Object.keys(category).map((item) => {
                                return(
                                    <li key={item} className={`theme_button ${styles['filter-button']}`} data-filter={category[item]}>.{category[item]}()</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {techGen()}
                </div>
            </div>
        </section>
    )
}