import Image from 'next/image';
import styles from './header.module.css';
import sukhfxLogo from '../../../public/images/sukhfx.svg';
import Link from 'next/link';
import { prompt } from '@/utils/fonts';

import TrailCursor from '../train-cursor/trailCursor';

export default function Header() {
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
                        <ul className={`${styles['menu-list']} list-unstyled mb-0`}>
                            <li><Link href='/' className='link'>.home()</Link></li>
                            <li><Link href='/work' className='link'>.work()</Link></li>
                            <li><Link href='/tech' className='link'>.tech()</Link></li>
                            <li><Link href='mailto:sukhbircing@gmail.com' className='link'>.contact()</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
        <TrailCursor/>
        </>
    )
}