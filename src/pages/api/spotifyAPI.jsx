// /pages/api/spotify.js
import querystring from 'querystring';
 
const {
  NEXT_PUBLIC_SPOTIFY_CLIENT_ID: client_id,
  NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET: client_secret,
  NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;
 
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
 
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
 
  return response.json();
};
 
export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();
 
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
 
const spotifyAPI = async (_, res) => {

  try {
    const response = await getNowPlaying();

    if (!response || response.status === 204 || response.status >= 400) {
      return res.status(200).json({ isPlaying: false });
    }

    const responseData = await response.json();

    if (!responseData || responseData.currently_playing_type !== 'track') {
      return res.status(200).json({ isPlaying: false });
    }

    const data = {
      isPlaying: responseData.is_playing,
      title: responseData.item.name,
      album: responseData.item.album.name,
      artist: responseData.item.album.artists
        .map((artist) => artist.name)
        .join(', '),
      albumImageUrl: responseData.item.album.images[0].url,
      songUrl: responseData.item.external_urls.spotify,
      progress: responseData.progress_ms,
      duration: responseData.item.duration_ms
    };

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default spotifyAPI;