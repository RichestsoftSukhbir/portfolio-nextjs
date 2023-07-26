import Link from "next/link";
import text from '@/config/text';
import styles from './intro.module.css';
import { useEffect } from "react";
import { FaFileArrowDown, FaUserTie } from 'react-icons/fa6'
import Image from "next/image";
import profileImage from '../../../../public/images/portfolio_image.webp'

export default function Intro() {
    
    // age script
    useEffect(() => {
        document.querySelector('.age').innerText = calculateAge('2002-09-08');
    })

    function calculateAge(birthDate) {
        const now = new Date();
        const birth = new Date(birthDate);

        let age = now.getFullYear() - birth.getFullYear();
        const months = now.getMonth() - birth.getMonth();
        if (months < 0 || (months === 0 && now.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <section className="intro-section spacer-y">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 dangerouslySetInnerHTML={{ __html: text.titles.intro }} className="mb-4"></h1>
                        <h6 dangerouslySetInnerHTML={{ __html: text.subText.introSub }} className="mb-4"></h6>
                        <div className="button-group">
                            <Link href='mailto:sukhbircing@gmail.com' className={`theme_button ${styles['intro-button']}`}>:hireMe() <FaUserTie /></Link>
                            <Link href='/docs/sukh_resume.pdf' className={`theme_button ${styles['intro-button']}`}>:resume() <FaFileArrowDown /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles['seld-image']}>
                            <Image src={profileImage} alt='profile image'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}