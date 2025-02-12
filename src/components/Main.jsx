import React from "react";
import ItemList from "./ItemList";
import {songsArray} from "../assets/database/songs";
import {artistsArray} from "../assets/database/artists";

const Main = () => {
    return (
        <div className="main">
            <ItemList
                title="Artista"
                numItems={6}
                itemsArray={artistsArray}
                listPath="artist-gallery/"
                itemPath="artist"
            />
            <ItemList
                title="Música"
                numItems={12}
                itemsArray={songsArray}
                listPath="/song-gallery"
                itemPath="song"
            />
        </div>
    );
};

export default Main;