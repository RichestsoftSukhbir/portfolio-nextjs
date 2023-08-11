import styles from './workIntro.module.css';
import fStyles from '@/pages/techpage/techIntro-section/techIntro.module.css'
import text from '@/config/text'
import Image from 'next/image';
import { useEffect } from 'react';

const { projects } = text;

export default function WorkIntro() {

    function workGen() {
        let work = [];
        let count = Object.keys(projects).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <li className={styles.listWrap} key={i}>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            {/* <div className={styles['work-img-wrap']}>
                                <Image src={projects[i].img} width={500} height={500} className='mb-3' alt={projects[i].name} />
                            </div> */}
                            <h3 className='mb-3'>{projects[i].name}</h3>
                            <ul className={`list-unstyled ${fStyles['filterBtnWrap']}`}>
                                {Object.keys(projects[i].techstack).map((data, idx) => {
                                    return (
                                        <li key={idx} className={`${fStyles['filter-button']} theme_button`}>{projects[i].techstack[data]}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col-md-7">
                            <p className={`m-0 ${styles.desc}`}>{projects[i].desc}</p>
                        </div>
                    </div>
                </li>
            )
            work.push(textItems);
        }
        return work;
    }

    useEffect(() => {

        // let workImgWrap = document.createElement('div');
        // workImgWrap.className = styles['work-wrap-blk'];
        // workImgWrap.append()
        // document.querySelector('.work-list-wrapper').appendChild(workImgWrap);

        // let workList = document.querySelectorAll(`.${styles.listWrap}`);
        // workList.forEach((item) => {

        //     item.addEventListener('mousemove', (e) => {
        //         const pos = {
        //             x: e.clientX,
        //             y: e.clientY
        //         }
        //     })
        // })
    }, [])

    return (
        <section className="work-wrapper spacer-y">
            <div className="container">
                <div className="row mb-40">
                    <div className="col-lg-7 col-md-6">
                        <h1 className='mb-3' dangerouslySetInnerHTML={{ __html: text.titles.work }}></h1>
                        <p className='mb-4'>I&apos;ve been making various types of projects some of them were basics and some of them were complicated. So far I&apos;ve made 13+ projects.</p>
                    </div>
                </div>
                <div className="work-list-wrapper">
                    <ul className={`list-unstyled p-0 ${styles['work-list']}`}>
                        {workGen()}
                    </ul>
                </div>
            </div>
        </section>
    )
}