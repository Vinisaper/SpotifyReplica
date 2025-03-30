import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCirclePlay} from '@fortawesome/free-solid-svg-icons';
import {Link, useParams} from 'react-router-dom';
import SongList from '../components/SongList';
import {songsArray, artistsArray} from '../../api/api.js';

const Artist = () => {
    const {id} = useParams();
    const artist = artistsArray.find(item => item._id == id);
    const songsArrayOfArtist = songsArray.filter((item, index) => item.artist == artist.name);
    const randomIndex = Math.floor(Math.random() * songsArrayOfArtist.length);
    const randomIdFromArtist = songsArrayOfArtist[randomIndex]._id;

    return (
        <div className="artist">
            <div
                className="artist__header"
                style={{
                    backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artist.banner})`
                }}
            >
                <h2 className="artist__title">{artist.name}</h2>
            </div>
            <div className="artist__body">
                <Link to={`/song/${randomIdFromArtist}?playlist=artist&playing=true`}>
                    <FontAwesomeIcon
                        className="artist__play-icon player__icon"
                        icon={faCirclePlay}
                    />
                </Link>
                <SongList
                    itemsArray={songsArrayOfArtist}
                    numItemsShow ={10}
                />
            </div>
        </div>
    );
};

export default Artist;