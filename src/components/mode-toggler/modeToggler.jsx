import { useEffect } from 'react';
import styles from './modeToggler.module.css';

export default function ModeToggler() {

    useEffect(() => {
        const toggleSwitch = document.querySelector(`.${styles['theme-switch']} input[type="checkbox"]`);

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
            else {
                document.documentElement.setAttribute('data-theme', 'light');
            }
        }

        toggleSwitch.addEventListener('change', switchTheme, false);

        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark'); //add this
            }
            else {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light'); //add this
            }
        }

        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);

            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
    }, [])

    return (
        <>
            <div class={styles['theme-switch-wrapper']}>
                <label class={styles['theme-switch']} for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class={`${styles['slider']} ${styles['round']}`}></div>
                </label>
            </div>
        </>
    )
}
