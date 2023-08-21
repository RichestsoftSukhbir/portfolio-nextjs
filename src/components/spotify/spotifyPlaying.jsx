import useSWR from 'swr';
import styles from './spotifyPlaying.module.css'
import { FaSpotify } from 'react-icons/fa6';
import { useMemo, useState } from 'react';
import {motion} from 'framer-motion';

export default function SpotifyPlaying() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotifyAPI', fetcher, {
        refreshInterval: 1 * 1000
    });

    // const progress = () => {
    //     return (data?.progress / data?.duration) * 100;
    // }

    const options = {
        initial: {
            opacity:0,
            y:20
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
        <section className={`${styles['now-playing']} py-3`}>
            <div className="container">
                <a target='_blank' rel='noopener noreferer' href={data?.isPlaying ? data.songUrl : '/'} className={`${styles['song-wrapper']}`}>
                    <div className={`${styles['song-image']}`}>
                        {data?.isPlaying ?
                            // eslint-disable-next-line @next/next/no-img-element
                            (<motion.img {...options} className={styles['track-img']} src={data?.albumImageUrl} alt={data?.album} />)
                            :
                            (<motion.div {...options}><FaSpotify size={25} color={'var(--spotify-color)'} /></motion.div>)}
                    </div>
                    <div className={`${styles['song-name']} ${data?.isPlaying ? styles['artist-wrap'] : ''}`}>
                        <motion.p {...options} transition={{duration:.5, delay:.3}} className='mb-0 fw-bold'>
                            {data?.isPlaying ? data.title : 'Not Listening'}
                        </motion.p>
                        <motion.p {...options} transition={{duration:.5, delay:.6}} className='mb-0 small'>
                            {data?.isPlaying ? data.artist : ''}
                        </motion.p>
                    </div>
                </a>
                {/* {data?.isPlaying ? 
                <div style={{background: 'red', height: '2px', width: `${progress()}%`, transition: 'all 0.3s ease'}}></div> : ''} */}
            </div>
        </section>
    );
}