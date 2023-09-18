import styles from './social.module.css';
import text from '@/config/text';
import { FaCodepen, FaDiscord, FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import {motion} from 'framer-motion';

const { titles } = text;

export default function Social() {

    const socialEl = [
        { icon: <FaFacebookF />, link: 'https://www.facebook.com/sukhhacking.yt.5', name: "Facebook" },
        { icon: <FaXTwitter />, link: 'https://twitter.com/sukh_fx', name: "XTwitter" },
        { icon: <FaInstagram />, link: 'https://www.instagram.com/sukhfx/', name: "Instagram" },
        { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/sukhfx/', name: "LinkedinIn" },
        { icon: <FaEnvelope />, link: 'mailto:sukhbircing@gmail.com', name: "Envelope" },
        { icon: <FaGithub />, link: 'https://github.com/sukhop', name: "Github" },
        { icon: <FaWhatsapp />, link: 'https://wa.me/+918168387411', name: "Whatsapp" },
        { icon: <FaCodepen />, link: 'https://codepen.io/sukhbir_singh', name: "Codepen" },
        { icon: <FaDiscord />, link: 'https://discord.com/users/457830738923094028', name: "Discord" }
    ];

    let idx;

    const options = {
        initial: {
            opacity:0,
            y:50
        },
        whileInView: {
            opacity:1,
            y:0
        },
        transition: {
            duration: .5
        }
    }

    return (
        <section className={`${styles['social-section']} spacer-y`}>
            <div className="container position-relative z-2">
                <motion.h2 {...options} className='mb-40' dangerouslySetInnerHTML={{ __html: titles.social }}></motion.h2>
                <ul className={`list-unstyled ${styles['social-list']} m-0`}>
                    {socialEl.map((data, idx) => (
                        <motion.li {...options} transition={{duration: .5, delay: .1 * idx}} key={idx}>
                            <a href={data.link} target='_blank' className={`${styles['social-btn']} theme_button`} aria-label={data.name}>
                                {data.icon}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    )
}