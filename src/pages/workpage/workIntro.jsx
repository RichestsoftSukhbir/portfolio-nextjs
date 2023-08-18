import styles from './workIntro.module.css';
import fStyles from '@/pages/techpage/techIntro-section/techIntro.module.css'
import text from '@/config/text'
import { FaLink } from 'react-icons/fa6';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const { projects } = text;

export default function WorkIntro() {

    const [isInside, setIsInside] = useState(false);

    function workGen() {
        let work = [];
        let count = Object.keys(projects).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <li className={styles.listWrap} key={i}>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <div className={`${styles['work-img-wrap']} mb-4`} style={{ background: `var(--bg), ${projects[i].bg}` }}>
                                <Image src={projects[i].img} width={500} height={500} className='work-img' alt={projects[i].name} />
                            </div>
                            <div className="position-relative">
                                {/* <FaLink className={`${styles['work-link']}`} size={20}/> */}
                                <Link target='_blank' href={projects[i].link} className={styles.workLink}>
                                    <h3 className='mb-3'>{projects[i].name}</h3>
                                </Link>
                                <ul className={`list-unstyled ${fStyles['filterBtnWrap']}`}>
                                    {Object.keys(projects[i].techstack).map((data, idx) => {
                                        return (
                                            <li key={idx} className={`${fStyles['filter-button']} theme_button`}>{projects[i].techstack[data]}</li>
                                        )
                                    })}
                                </ul>
                            </div>
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

    function workImgGen() {
        let img = [];
        let count = Object.keys(projects).length;

        for (let i = 1; i <= count; i++) {
            let workImgItem = (
                <div className={`${styles['work-img-wrap']}`} key={i} style={{ background: `var(--bg), ${projects[i].bg}` }}>
                    <Image src={projects[i].img} width={500} height={500} className='work-img' alt={projects[i].name} />
                </div>
            )
            img.push(workImgItem);
        }
        return img;
    }

    useEffect(()=> {
        const projects = document.querySelector(`.${styles['work-list']}`);
        const preview = document.querySelector(`.${styles['preview']}`);
        window.addEventListener("mousemove", (e)=> {
            preview.animate({
                left: `${e.clientX - 150}px`,
                top: `${e.clientY - 150}px`
            }, { duration: 3000, fill: 'forwards' });
            projects.addEventListener('mouseenter', ()=>{
                gsap.fromTo(preview, {
                    scale: 0
                }, {
                    scale: 1
                });
                Array.from(projects.querySelectorAll(`.${styles.listWrap}`)).forEach((e, idx)=> {
                    e.addEventListener('mousemove', ()=> {
                        preview.querySelector(`.${styles['preview-img']}`).style.transform = `translateY(-${300 * idx}px)`;
                    })
                })
            })
            projects.addEventListener('mouseleave', ()=>{
                gsap.fromTo(preview, {
                    scale: 1
                }, {
                    scale: 0
                });
            });
        })
    },[])

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
                    <div className={`${styles['preview']}`}>
                        <div className={`${styles['preview-img']}`}>
                            {workImgGen()}
                        </div>
                    </div>
                    <ul className={`list-unstyled p-0 ${styles['work-list']}`}>
                        {workGen()}
                    </ul>
                </div>
            </div>
        </section>
    )
}