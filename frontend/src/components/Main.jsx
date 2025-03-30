import React from "react";
import ItemList from "./ItemList";
import {songsArray, artistsArray} from '../../api/api.js';

const Main = ( {type}) => {
    return (
        <div className="main">
            {type === "Artist" || type ===undefined ? (
                <ItemList
                    title="Artista"
                    numItems={6}
                    itemsArray={artistsArray}
                    listPath="/artist-gallery"
                    itemPath="artist"
                />
            ) : (<></>)
            }
            {type === "Song" || type ===undefined ? (
                <ItemList
                    title="Música"
                    numItems={12}
                    itemsArray={songsArray}
                    listPath="/song-gallery"
                    itemPath="song"
                />
            ): (<></>)
            }
        </div>
    );
};

export default Main;