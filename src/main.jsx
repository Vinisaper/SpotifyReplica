import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import './index.css'
import Header from "./components/Header";
import Home from "./pages/Home"
import ArtistGallery from "./pages/ArtistGallery"
import Artist from "./pages/Artist"
import SongGallery from "./pages/SongGallery"
import Song from "./pages/Song"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist-gallery" element={<ArtistGallery />} />
            <Route path="/artist:id" element={<Artist />} />
            <Route path="/song-gallery" element={<SongGallery />} />
            <Route path="/song:id" element={<Song />} />
        </Routes>
    </BrowserRouter>
)
