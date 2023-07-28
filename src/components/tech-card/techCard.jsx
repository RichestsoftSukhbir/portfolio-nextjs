import Image from 'next/image';
import styles from './techCard.module.css';
import introStyles from '@/pages/homepage/intro-section/intro.module.css';
import text from '@/config/text';
import { prompt } from '@/utils/fonts'

let { img, techText } = text.techCard;


export default function TechCard({ nth, size, mode }) {
    return (
        <div className={`tech-wrapper ${introStyles['tech-wrapper']} ${styles['tech-wrapper']} ${styles[mode]}`} key={nth} data-position={nth}>
            <div className='tech-img'>
                <Image src={img[nth]} width={size} height={size} alt='photoshop' />
            </div>
            <div className={`${styles['tech-text']} ${prompt.className}`}>
                {techText[nth]}
            </div>
        </div>
    )
}