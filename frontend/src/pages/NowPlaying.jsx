import React from 'react'
import Player from '../components/Player.jsx';
import {songsArray, artistsArray} from '../../api/api.js';
import {Link, useParams, useSearchParams} from 'react-router-dom';

const NowPlaying = () => {
    const {songId} = useParams();
    const [searchParams] = useSearchParams();
    const playlist = searchParams.get('playlist');
    const {image, name, duration, artist, audio} = songsArray.find(item => item._id === songId);
    const songsArrayOfArtist = songsArray.filter((item, index) => item.artist === artist);
    const artistObj = artistsArray.find(item => item.name === artist);
    const songsArrayToPlay = playlist === "artist" ? songsArrayOfArtist : songsArray;
    return (
        <div className="now-playing">
            <div className="now-playing__container">
                <div className="now-playing__image-container">
                    <img className="now-playing__image"
                         src={image}
                    />
                </div>
            </div>
            <div className="now-playing__bar">
                <Link to={`/artist/${artistObj._id}`} className="now-playing__artist-div">
                    <img className="now-playing__artist-image"
                        src={artistObj.image}
                        alt={`Imagem do artista ${artist}`}
                    />
                </Link>
                <Player
                    songsArray={songsArrayToPlay}
                />
                <div className="now-playing__info">
                    <h2 className="now-playing__name">{name}</h2>
                    <h2 className="now-playing__artist-name">{artist}</h2>
                </div>
            </div>
        </div>
    );
}

export default NowPlaying;