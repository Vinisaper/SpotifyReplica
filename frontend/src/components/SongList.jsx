import React from "react";
import SongItem from "./SongItem";
import {useState} from "react";

const SongList = ( {itemsArray, numItemsShow} ) => {
    const [items, setItems] = useState(numItemsShow);
    return (
        <div className="song-list">
            {itemsArray.filter((item, index) => index < items)
                .map((curObj, i) => (
                        <SongItem
                            key={i}
                            index={i}
                            {...curObj} />
                    )
                )
            }
            <a
                className="song-list__see-more"
                onClick={() => {setItems(items + 5)}}
            >
                Ver mais
            </a>
        </div>
    );
};

export default SongList;