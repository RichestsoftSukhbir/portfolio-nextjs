import styles from './workIntro.module.css';
import fStyles from '@/pages/techpage/techIntro-section/techIntro.module.css'
import text from '@/config/text'
import { FaArrowUpRightFromSquare, FaLink } from 'react-icons/fa6';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';

const { projects } = text;

export default function WorkIntro() {

    function workGen() {
        let work = [];
        let count = Object.keys(projects).length;
        for (let i = 1; i <= count; i++) {
            let textItems = (
                <li className={styles.listWrap} key={i} id={`p${i}`}>
                    <div className="row g-4 align-items-center">
                        <div className="col-md-5">
                            <div className={`${styles['work-img-wrap']} mb-4`} style={{ background: `radial-gradient(transparent 40%, black), ${projects[i].bg}` }}>
                                <Image src={projects[i].img} width={500} height={500} className='work-img' alt={projects[i].name} />
                            </div>
                            <div className="position-relative">
                                {/* <FaLink className={`${styles['work-link']}`} size={20}/> */}
                                <h3 className='mb-3'>{projects[i].name}</h3>
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
                <div key={i} className={styles['work-img-wrap']} style={{ background: `radial-gradient(transparent 40%, black), ${projects[i].bg}` }} >
                    <Image src={projects[i].img} width={500} height={500} className='work-img mb-3' alt={projects[i].name} />
                </div>
            )
            img.push(workImgItem);
        }
        return img;
    }

    // useEffect(()=> {
    //     const projects = document.querySelector(`.${styles['work-list']}`);
    //     const preview = document.querySelector(`.${styles['preview']}`);
    //     const previewImg = document.querySelector(`.${styles['preview-img']}`);

    //     let isInside = false;

    //     const bgPos = {
    //         p1: "0",
    //         p2: "-300",
    //         p3: "-600",
    //         p4: "-900"
    //     }

    //     const moveStuff = (e) => {
    //         const mouseInside = isMouseInsideContainer(e);
    //         if(mouseInside != isInside) {
    //             isInside = mouseInside;
    //             if(isInside) {
    //                 gsap.to(preview, 0.3, {
    //                     scale: 1
    //                 })
    //             } else {
    //                 gsap.to(preview, 0.3, {
    //                     scale: 0
    //                 })
    //             }
    //         }
    //     }

    //     const moveProject = (e) => {
    //         const prevRect = preview.getBoundingClientRect();
    //         const offsetX = prevRect.width / 2;
    //         const offsetY = prevRect.height / 2;

    //         preview.style.left = e.pageX - offsetX + "px";
    //         preview.style.top = e.pageY - offsetY + "px";
    //     }

    //     const moveProjectImg = (e) => {
    //         const projectID = e.id;
    //         gsap.to(previewImg, .4, {
    //             transform: (`translateY(${bgPos[projectID]})` || "-200")
    //         })
    //     }

    //     const isMouseInsideContainer = (e) => {
    //         const containerRect = projects.getBoundingClientRect();
    //         console.log(containerRect);
    //         return(
    //             e.pageX >= containerRect.left &&
    //             e.pageX <= containerRect.right &&
    //             e.pageY >= containerRect.top &&
    //             e.pageY <= containerRect.bottom 
    //         );
    //     };

    //     window.addEventListener('mousemove', moveStuff);
    //     Array.from(projects.children).forEach((e) => {
    //         e.addEventListener('mousemove', moveProject);
    //         e.addEventListener('mousemove', moveProjectImg.bind(null, projects));
    //     });
    // }, [])

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