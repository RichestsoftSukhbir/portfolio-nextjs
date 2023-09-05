import { FaArrowDownLong } from 'react-icons/fa6';
import styles from './terminal.module.css';
import { jetBrainsMono } from '@/utils/fonts';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { sendFormData } from '@/services/mailSender';
import * as Yup from 'yup';

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
    const [dataSend, setDataSend] = useState(false);
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true)
    }, []);

    let date, hours, minutes, seconds, amPm;
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = isClient ? (date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()) : '14';
    amPm = (hours < 12) ? "AM" : "PM";

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     subject: '',
    //     message: '',
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         // Send a POST request to your API route
    //         const response = await axios.post('/api/mail', formData);
    //         if (response.status === 200) {
    //             alert('Email sent successfully');
    //         } else {
    //             alert('Email sending failed');
    //         }
    //     } catch (error) {
    //         console.error('Error sending email:', error);
    //         alert('Email sending failed');
    //     }
    // };

    const initValues = {
        name: "",
        email: "",
        subject: "",
        message: ""
    }
    const initState = { values: initValues }
    const [formData, setFormData] = useState(initState);
    const { values, isLoading } = formData;

    const handleChange = ({ target }) => setFormData((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name]: target.value
        }
    }));

    const noSpaces = (value) => !/^\s+$/.test(value);
    const isValidEmail = (value) => {
        // Use a regular expression to check for a valid email format
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // Check if the email format is valid and not empty
        return emailRegex.test(value);
    };

    // Define validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required')
            .test('no-spaces', 'Name cannot contain only spaces', noSpaces),
        email: Yup.string()
            .test('valid-email', 'Invalid email address', isValidEmail) // Custom email validation
            .required('Email is required'),
        subject: Yup.string()
            .required('Subject is required')
            .test('no-spaces', 'Subject cannot contain only spaces', noSpaces),
        message: Yup.string()
            .required('Message is required')
            .test('no-spaces', 'Message cannot contain only spaces', noSpaces),
    });

    // Initialize form state with errors
    const [formErrors, setFormErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // Validation function
    const validateForm = async () => {
        try {
            // Validate the form values against the schema
            await validationSchema.validate(values, { abortEarly: false });
            // If validation passes, clear any previous errors
            setFormErrors({});
            return true; // Form is valid
        } catch (errors) {
            // If validation fails, set errors in the formErrors state
            const newErrors = {};
            errors.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setFormErrors(newErrors);
            return false; // Form is invalid
        }
    };

    const onSubmit = async () => {
        const isValid = await validateForm();
        if (isValid) {
            // If the form is valid, proceed with form submission
            setFormData((prev) => ({
                ...prev,
                isLoading: true,
            }));
            await sendFormData(values);
            setDataSend(true);
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
                <form method='POST' className={`${jetBrainsMono.className} ${styles['terminal-container']}`}>
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
                    {!dataSend ?
                        <motion.div className={`${styles['form-body']}`}>
                            <p className='mb-1'><span className="primary-color">root@sukhop:~# </span>
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
                            {formErrors.name && (
                                <p className='mb-1'><span className="primary-color">root@sukhop:~# </span>
                                    <motion.span className='terminal-text' variants={sentance} initial="hidden" whileInView="visible">
                                        {`${formErrors.name}`.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} transition={{ ease: false }}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </motion.span>
                                </p>
                            )}
                            {formErrors.email && (
                                <p className='mb-1'><span className="primary-color">root@sukhop:~# </span>
                                    <motion.span className='terminal-text' variants={sentance} initial="hidden" whileInView="visible">
                                        {`${formErrors.email}`.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} transition={{ ease: false }}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </motion.span>
                                </p>
                            )}
                            {formErrors.subject && (
                                <p className='mb-1'><span className="primary-color">root@sukhop:~# </span>
                                    <motion.span className='terminal-text' variants={sentance} initial="hidden" whileInView="visible">
                                        {`${formErrors.subject}`.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} transition={{ ease: false }}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </motion.span>
                                </p>
                            )}
                            {formErrors.message && (
                                <p className='mb-1'><span className="primary-color">root@sukhop:~# </span>
                                    <motion.span className='terminal-text' variants={sentance} initial="hidden" whileInView="visible">
                                        {`${formErrors.message}`.split("").map((char, index) => {
                                            return (
                                                <motion.span key={char + "-" + index} variants={letter} transition={{ ease: false }}>
                                                    {char}
                                                </motion.span>
                                            )
                                        })}
                                    </motion.span>
                                </p>
                            )}
                            <div className="row g-2 mt-3">
                                <div className="col-12">
                                    <div className={styles['form-row']}>
                                        <label htmlFor="name">Name</label>
                                        <span>......<span className="d-none d-md-inline">.......</span></span>
                                        <input type="text" placeholder='{Enter}' name='name' id='name' className={styles['input']} onChange={handleChange} value={values.name} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={styles['form-row']}>
                                        <label htmlFor="email">Email</label>
                                        <span>.....<span className="d-none d-md-inline">.......</span></span>
                                        <input type="email" placeholder='{Enter}' name='email' id='email' className={styles['input']} onChange={handleChange} value={values.email} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={styles['form-row']}>
                                        <label htmlFor="subject">Subject</label>
                                        <span>...<span className="d-none d-md-inline">.......</span></span>
                                        <input type="text" placeholder='{Enter}' name='subject' id='subject' className={styles['input']} onChange={handleChange} value={values.subject} required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className={styles['form-row']}>
                                        <label htmlFor="message">Message</label>
                                        <span>...<span className="d-none d-md-inline">.......</span></span>
                                        <textarea className={styles.input} placeholder='{Enter}' name="message" id="message" rows="1" onChange={handleChange} value={values.message} required></textarea>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button type="button" className={`button theme_button mt-3 ${styles.submitBtn} ${!values.name || !values.email || !values.subject || !values.message ? styles['disabled-btn'] : "enabled"} ${isLoading ? styles['loading'] : ''}`} onClick={onSubmit}>
                                        .submit(data)
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                        :
                        <motion.div className={`${styles['form-send']}`}>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    Sending details to the owner...
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: .6 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    &#123;
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: .8 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    &nbsp;&nbsp;&quot;name&quot;: <span className="primary-color">&quot;{values.name}&quot;</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: 1 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    &nbsp;&nbsp;&quot;email&quot;: <span className="primary-color">&quot;{values.email}&quot;</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: 1.2 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    &nbsp;&nbsp;&quot;subject&quot;: <span className="primary-color">&quot;{values.subject}&quot;</span>
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: 1.4 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    &#125;
                                </div>
                            </motion.div>
                            <motion.div className={styles['data-row']} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0, delay: 1.6 } }}>
                                <div className={styles['data-time']}>
                                    [{hours}:{minutes}:{seconds} {amPm}]
                                </div>
                                <div className={styles['data-content']}>
                                    <p className="mb-0"><span className={`${styles.success} fw-bold`}>🎉 Success!</span> Your message has been sent successfully...</p>
                                    {/* <p className='mb-0 d-none'><span className={`${styles.error} fw-bold`}>❌ Error!</span> Something went wrong. Please try again...</p> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    }
                </form>
            </motion.section>
            <motion.div className={`${styles.terminalOverlay} ${open ? `` : `${styles.pointer}`}`} animate={open ? "open" : "close"} onClick={setOpen} variants={overlayVar}></motion.div>
        </>
    )
}