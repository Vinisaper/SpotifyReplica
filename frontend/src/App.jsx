import React from "react"
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ArtistGallery from './pages/ArtistGallery.jsx';
import Artist from './pages/Artist.jsx';
import SongGallery from './pages/SongGallery.jsx';
import NowPlaying from './pages/NowPlaying.jsx';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/artist-gallery' element={<ArtistGallery />} />
                <Route path='/artist/:id' element={<Artist />} />
                <Route path='/song-gallery' element={<SongGallery />} />
                <Route path='/song/:songId' element={<NowPlaying />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
