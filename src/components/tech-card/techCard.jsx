import Image from 'next/image';
import styles from './techCard.module.css';
import introStyles from '@/pages/homepage/intro-section/intro.module.css';
import text from '@/config/text';
import { prompt } from '@/utils/fonts';

let { img, techText, techCat } = text.techCard;


export default function TechCard({ nth, size, mode }) {
    return (
        <div className={`tech-wrapper all ${introStyles['tech-wrapper']} ${styles['tech-wrapper']} ${styles[mode]}`} data-cat={techCat[nth]} key={nth} data-position={nth}>
            <div className={`tech-img ${styles['tech-img']}`}>
                <Image src={img[nth]} width={size} height={size} alt={techText[nth]} />
            </div>
            <div className={`${styles['tech-text']} ${prompt.className}`}>
                {techText[nth]}
            </div>
        </div>
    )
}