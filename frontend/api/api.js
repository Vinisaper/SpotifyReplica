// Fetch and Axios
import axios from 'axios';

const URL = "http://localhost:3000";

const responseSongs = await axios.get(`${URL}/song-gallery`);
const responseArtists = await axios.get(`${URL}/artist-gallery`);

const songsArray = responseSongs.data
const artistsArray = responseArtists.data

export {songsArray, artistsArray};
// console.log(responseArtists.data);