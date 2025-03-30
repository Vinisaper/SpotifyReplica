import React from "react";
import {Link} from "react-router-dom";

const SongItem = ( {index, _id, image, name, duration, artist, audio} ) => {
    return (
        <Link className="song-item" to={`/song/${_id}?playlist=artist&playing=true`}>
            <div className="song-item__number-album">
                <p>{index + 1}</p>
                <div className="song-item__album">
                    <img className="song-item__image"
                         src ={image}
                         alt={`Imagem do artista ${artist}`}
                    />
                    <p className="song-item__name">{name}</p>
                </div>
            </div>
            <p className="song-item__duration">{duration}</p>
        </Link>
    );
};

export default SongItem;