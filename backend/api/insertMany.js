import {songsArray} from '../../frontend/src/assets/database/songs.js'
import {artistsArray} from '../../frontend/src/assets/database/artists.js'
import {db} from './connect.js'

// const newSongsArray = songsArray.map(songObj => {
//     const newSongObj = { ...songObj };
//     delete newSongObj.id
//     return newSongObj;
// });

const newArtistsArray = artistsArray.map(artistObj => {
    const newArtistObj = { ...artistObj };
    delete newArtistObj.id
    return newArtistObj;
});

// const responseSongs = await db.collection('songs').insertMany(newSongsArray);
const responseArtists = await db.collection('artists').insertMany(newArtistsArray);