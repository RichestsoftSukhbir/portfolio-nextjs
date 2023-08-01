import useSWR from 'swr';
import styles from './spotifyPlaying.module.css'
import { FaSpotify } from 'react-icons/fa6';
import { useMemo, useState } from 'react';

export default function SpotifyPlaying() {
    const fetcher = (url) => fetch(url).then((r) => r.json());
    const { data } = useSWR('/api/spotifyAPI', fetcher, {
        refreshInterval: 1 * 1000
    });

    // const progress = () => {
    //     return (data?.progress / data?.duration) * 100;
    // }

    return (
        <section className={`${styles['now-playing']} py-3`}>
            <div className="container">
                <a target='_blank' rel='noopener noreferer' href={data?.isPlaying ? data.songUrl : '/'} className={`${styles['song-wrapper']}`}>
                    <div className={`${styles['song-image']}`}>
                        {data?.isPlaying ?
                            // eslint-disable-next-line @next/next/no-img-element
                            (<img className={styles['track-img']} src={data?.albumImageUrl} alt={data?.album} />)
                            :
                            (<FaSpotify size={25} color={'var(--spotify-color)'} />
                            )}
                    </div>
                    <div className={`${styles['song-name']} ${data?.isPlaying ? styles['artist-wrap'] : ''}`}>
                        <p className='mb-0 fw-bold'>
                            {data?.isPlaying ? data.title : 'Not Listening'}
                        </p>
                        <p className='mb-0 small'>
                            {data?.isPlaying ? data.artist : ''}
                        </p>
                    </div>
                </a>
                {/* {data?.isPlaying ? 
                <div style={{background: 'red', height: '2px', width: `${progress()}%`, transition: 'all 0.3s ease'}}></div> : ''} */}
            </div>
        </section>
    );
}