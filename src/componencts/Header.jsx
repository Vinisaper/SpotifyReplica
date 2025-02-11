import React from 'React'
import spotifyLogo from '../assets/logo/spotify-logo.png'

const Header = () => {
    return (
        <div>
            <img src={spotifyLogo} alt="Logo do Spotify" />
            <a href="/">
                <h1>Spotify</h1>
            </a>
        </div>
    )
}

export default Header