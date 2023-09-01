import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './terminal.module.css';
import { jetBrainsMono } from '@/utils/fonts';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';

export function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => {
            setMatches(media.matches);
        };

        if (typeof media.addEventListener === "function") {
            media.addEventListener("change", listener);
        } else {
            media.addListener(listener);
        }

        return () => {
            if (typeof media.removeEventListener === "function") {
                media.removeEventListener("change", listener);
            } else {
                media.removeListener(listenerList);
            }
        };
    }, [matches, query]);

    return matches;
}

export default function Terminal({ open, setOpen }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send a POST request to your API route
            const response = await axios.post('/api/mail', formData);
            if (response.status === 200) {
                alert('Email sent successfully');
            } else {
                alert('Email sending failed');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Email sending failed');
        }
    };

    const isSmall = useMediaQuery("(max-width: 767px)");

    const variants = isSmall ? {
        close: { y: "100%", transition: { ease: "easeOut", duration: .3 } },
        open: { y: 0, transition: { ease: "easeOut", duration: .3 } }
    } : {
        close: { y: "calc(100% - 52.5px)", transition: { ease: "easeOut", duration: .3 } },
        open: { y: 0, transition: { ease: "easeOut", duration: .3 } },
        hover: { y: "calc(100% - 70px)", transition: { ease: "easeOut", duration: .3 } },
    }
    const overlayVar = {
        close: { opacity: 0, transition: { ease: "easeOut", duration: .3 } },
        open: { opacity: 1, transition: { ease: "easeOut", duration: .3 } }
    }
    const arrowVar = {
        up: { rotateX: 180, transition: { ease: "easeOut", duration: .3 } }
    }

    const terminalText = "I will read all my emails one by one and I'm not going to let them missed. Send me any message you want and I will reply that.";

    const sentance = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delay: .3,
                staggerChildren: .05
            },
        },
    }

    const letter = {
        hidden: { opacity: 0, y: 50, transition: { duration: 0 } },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0 }
        }
    }

    return (
        <>
            <motion.section className={styles.terminal} animate={open ? "open" : "close"} variants={variants}>
                <form method='POST' className={`${jetBrainsMono.className} ${styles['terminal-container']}`} onSubmit={handleSubmit}>
                    <button type='button' className={`${styles['form-head']}`} onClick={setOpen}>
                        <div className={styles['left']}>
                            <h2 className='mb-0'>.contact<span className='primary-color'>(me)</span></h2>
                        </div>
                        <div className={styles['right']}>
                            <p className='mb-0'>Spaces: 4</p>
                            <p className='mb-0'>UTF-8</p>
                            <motion.p className="mb-0" animate={open ? "up" : "down"} variants={arrowVar}><FaArrowDownLong /></motion.p>
                        </div>
                    </button>
                    <div className={styles['form-body']}>
                        <p className='mb-4'><span className="primary-color">root@sukhop:~# </span>
                            <motion.span className='terminal-text' variants={sentance} initial="hidden" whileInView="visible">
                                {terminalText.split("").map((char, index) => {
                                    return (
                                        <motion.span key={char + "-" + index} variants={letter} transition={{ ease: false }}>
                                            {char}
                                        </motion.span>
                                    )
                                })}
                            </motion.span>
                        </p>
                        <div className="row g-2">
                            <div className="col-12">
                                <div className={styles['form-row']}>
                                    <label htmlFor="name">Name</label>
                                    <span>......<span className="d-none d-md-inline">.......</span></span>
                                    <input type="text" placeholder='{Enter}' name='name' id='name' className={styles['input']} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={styles['form-row']}>
                                    <label htmlFor="email">Email</label>
                                    <span>.....<span className="d-none d-md-inline">.......</span></span>
                                    <input type="email" placeholder='{Enter}' name='email' id='email' className={styles['input']} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={styles['form-row']}>
                                    <label htmlFor="subject">Subject</label>
                                    <span>...<span className="d-none d-md-inline">.......</span></span>
                                    <input type="text" placeholder='{Enter}' name='subject' id='subject' className={styles['input']} onChange={handleChange} required />
                                </div>
                            </div>
                            <div className="col-12">
                                <div className={styles['form-row']}>
                                    <label htmlFor="message">Message</label>
                                    <span>...<span className="d-none d-md-inline">.......</span></span>
                                    <textarea className={styles.input} placeholder='{Enter}' name="message" id="message" rows="1" onChange={handleChange} required></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className={`button theme_button mt-3 ${styles.submitBtn}`}>
                                    .submit(data)
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </motion.section>
            <motion.div className={`${styles.terminalOverlay} ${open ? `` : `${styles.pointer}`}`} animate={open ? "open" : "close"} onClick={setOpen} variants={overlayVar}></motion.div>
        </>
    )
}