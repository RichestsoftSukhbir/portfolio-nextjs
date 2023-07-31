import text from '@/config/text';
import styles from './footer.module.css'
import Blob from '../blob/blob';

export default function Footer() {
    return (
        <footer className={`py-3 ${styles['footer-wrapper']}`}>
            <Blob/>
            <svg className='d-none'>
                <filter id='f'>
                    <feTurbulence type='fractalNoise' baseFrequency='7.5'/>
                </filter>
            </svg>
            <div className="container">
                <p className="m-0">&copy;{new Date().getFullYear()} {text.footer.copyright}</p>
            </div>
        </footer>
    )
}
