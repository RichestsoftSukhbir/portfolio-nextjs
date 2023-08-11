import styles from './social.module.css';
import text from '@/config/text';
import { prompt } from '@/utils/fonts';
import { FaCodepen, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';

const { titles } = text;

export default function Social() {

    const socialEl = [
        { icon: <FaFacebookF />, link: 'https://www.google.com' },
        { icon: <FaTwitter />, link: 'https://www.google.com' },
        { icon: <FaInstagram />, link: 'www.google.com' },
        { icon: <FaLinkedinIn />, link: 'www.google.com' },
        { icon: <FaEnvelope />, link: 'www.google.com' },
        { icon: <FaGithub />, link: 'www.google.com' },
        { icon: <FaWhatsapp />, link: 'www.google.com' },
        { icon: <FaCodepen />, link: 'www.google.com' }
    ];

    return (
        <section className={`${styles['social-section']} spacer-y`}>
            <div className="container position-relative z-2">
                <h2 className='mb-40' dangerouslySetInnerHTML={{ __html: titles.social }}></h2>
                <ul className={`list-unstyled ${styles['social-list']} m-0`}>
                    {socialEl.map((data, idx) => (
                        <li key={idx}>
                            <a href={data.link} target='_blank' className={`${styles['social-btn']} theme_button`}>
                                {data.icon}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}