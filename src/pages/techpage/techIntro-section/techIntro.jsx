import TechCard from '@/components/tech-card/techCard';
import styles from './techIntro.module.css'
import { motion } from 'framer-motion';
import text from '@/config/text';
import { useEffect } from 'react';

const { techText, category, techCat } = text.techCard;

export default function TechIntro() {

    function techGen() {
        let texts = [];
        let count = Object.keys(techText).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <motion.div className={`skill-wrapper ${techCat[i]} col-lg-4 col-sm-6 col-4`}
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

    useEffect(() => {
        const filterButtons = document.querySelectorAll(`.${styles['filter-button']}`);

        const skillWrappers = document.querySelectorAll('.skill-wrapper');

        filterButtons[0].classList.add(`${styles['active']}`);

        filterButtons.forEach(filterButton => {
            filterButton.addEventListener('click', function () {
                const value = this.getAttribute('data-filter');

                if (value === 'all') {
                    skillWrappers.forEach(skillWrapper => {
                        skillWrapper.style.display = 'block';
                    });
                } else {
                    skillWrappers.forEach(skillWrapper => {
                        if (!skillWrapper.classList.contains(value)) {
                            skillWrapper.style.display = 'none';
                        } else {
                            skillWrapper.style.display = 'block';
                        }
                    });
                }
                filterButtons.forEach(button => {
                    button.classList.remove(`${styles['active']}`);
                });
                this.classList.add(`${styles['active']}`);
            });
        });
    }, []);

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
        <section className="tech-card-wrapper spacer-y">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-lg-7 col-md-6">
                        <motion.h1 {...options} className='mb-3' dangerouslySetInnerHTML={{ __html: text.titles.tech }}></motion.h1>
                        <motion.p {...options} transition={{duration: .5, delay: .3}} className='mb-4'>A list of my favorite tools and technologies that I use on a regular basis.</motion.p>
                        <ul className={`list-unstyled m-0 ${styles.filterBtnWrap}`}>
                            {Object.keys(category).map((item) => {
                                return (
                                    <motion.li {...options} transition={{duration:.5, delay: .6}} key={item} className={`theme_button ${styles['filter-button']}`} data-filter={category[item]}>.{category[item]}()</motion.li>
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