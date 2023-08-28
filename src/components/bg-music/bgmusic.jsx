import { useEffect, useRef } from "react";
import styles from './bgmusic.module.css'

export default function BgMusic() {

    const audioRef = useRef(null);

    useEffect(() => {
        let context, analyser, dataArray;
        const visualizer = document.getElementById('visualizer');
        const togglePlayBtn = document.getElementById('toggle-play');
        const audio = audioRef.current;

        const togglePlayer = () => {
            if (!context) {
                preparation();
            }
            if (audio.paused) {
                playAudio();
            } else {
                pauseAudio();
            }
        }

        const playAudio = () => {
            audio.play();
            loop();
            togglePlayBtn.querySelector(`.${styles['toggle-text']}`).innerHTML = `Pause Music`;
        }

        const pauseAudio = () => {
            audio.pause();
            if (visualizer) {
                for (let i = 0; i < visualizer.children.length; i++) {
                    visualizer.children[i].style.height = `2px`;
                }
            }
            togglePlayBtn.querySelector(`.${styles['toggle-text']}`).innerHTML = `Play Music`;
        }

        const preparation = () => {
            context = new AudioContext();
            analyser = context.createAnalyser();
            const src = context.createMediaElementSource(audio);
            src.connect(analyser);
            analyser.connect(context.destination);
            loop();
        }

        const loop = () => {
            if (audio.paused) {
                return;
            2}
            window.requestAnimationFrame(loop);

            dataArray = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(dataArray);
            changeTracks();
        }

        const changeTracks = () => {
            if (visualizer) {
                for (let i = 0; i < visualizer.children.length; i++) {
                    visualizer.children[i].style.height = `${dataArray[i * 5] * 0.39215686274}%`;
                }
            }
        }

        togglePlayBtn.addEventListener('click', togglePlayer);

    }, []);

    return (
        <>
            <button className={styles['music-toggle']} id="toggle-play">
                <div className={styles['music-visualizer']} id="visualizer">
                    <div className="track"></div>
                    <div className="track"></div>
                    <div className="track"></div>
                    <div className="track"></div>
                    <div className="track"></div>
                    <div className="track"></div>
                </div>
                <div className={styles['toggle-text']}>
                    Toggle Music
                </div>
            </button>
            <audio src="/music/sakura.mp3" ref={audioRef} loop autoPlay id="audio" ></audio>
        </>
    )
}