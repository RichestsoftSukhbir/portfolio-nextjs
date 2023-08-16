import styles from './social.module.css';
import text from '@/config/text';
import { prompt } from '@/utils/fonts';
import { FaCodepen, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa6';

const { titles } = text;

export default function Social() {

    const socialEl = [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/sukhhacking.yt.5' },
        { icon: <FaTwitter />, link: 'https://twitter.com/sukh_fx' },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/sukhfx/' },
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sukhfx/' },
        { icon: <FaEnvelope />, link: 'mailto:sukhbircing@gmail.com' },
        { icon: <FaGithub />, link: 'https://github.com/sukhop' },
        { icon: <FaWhatsapp />, link: 'https://wa.me/+918168387411' },
        { icon: <FaCodepen />, link: 'https://codepen.io/sukhbir_singh' }
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