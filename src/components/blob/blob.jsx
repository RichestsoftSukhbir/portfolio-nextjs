import { useEffect } from 'react'
import styles from './blob.module.css'


export default function Blob() {

    useEffect(() => {
        let blob = document.querySelector(`.${styles['blob']}`);

        window.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;

            blob.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 3000, fill: 'forwards' });
        });

    }, [])

    return (
        <div className={styles['blob-wrap']}>
            <div className={`${styles['blob']}`}></div>
            <div className={styles['blob-blur']}></div>
        </div>
    )
}