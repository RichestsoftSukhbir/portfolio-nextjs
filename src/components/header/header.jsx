import Image from 'next/image';
import styles from './header.module.css';
import sukhfxLogo from '../../../public/images/sukhfx.svg';
import Link from 'next/link';
import { prompt } from '@/utils/fonts';

import TrailCursor from '../train-cursor/trailCursor';
import { useState } from 'react';

export default function Header() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <header className={`${styles['header']} ${styles['glass']}`}>
                <div className="container">
                    <nav className={styles['navigation-bar']}>
                        <div className={styles['item-left']}>
                            <Link href='/'>
                                <div className={styles['logo']}>
                                    <Image src={sukhfxLogo} alt="logo" priority={true} />
                                    <span className={`logo-text mb-0 ${prompt.className}`}>sukh<span className='primary-color'>fx</span></span>
                                </div>
                            </Link>
                        </div>
                        <div className={styles['item-right']}>
                            <ul className={`${styles['menu-list']} list-unstyled mb-0 ${navOpen ? styles['open']: ''}`}>
                                <li><Link href='/' className='link'>.home()</Link></li>
                                <li><Link href='/work' className='link'>.work()</Link></li>
                                <li><Link href='/tech' className='link'>.tech()</Link></li>
                                <li><Link href='mailto:sukhbircing@gmail.com' className='link'>.contact()</Link></li>
                            </ul>
                            <div id={styles['hamburger']} className={`d-block d-md-none ${navOpen ? styles['open']: ''}`} onClick={() => setNavOpen(!navOpen)}>
                                <svg width="30" height="30" viewBox="0 0 100 100">
                                    <path class={`${styles['line']} ${styles['line1']}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                                    <path class={`${styles['line']} ${styles['line2']}`} d="M 20,50 H 80" />
                                    <path class={`${styles['line']} ${styles['line3']}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                                </svg>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <TrailCursor />
        </>
    )
}