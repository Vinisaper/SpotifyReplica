import {React, useRef, useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCirclePlay, faCirclePause, faBackwardStep, faForwardStep} from "@fortawesome/free-solid-svg-icons";
import {Link, useParams, useSearchParams} from "react-router-dom";

const formatTime = (elapsedSeconds) => {
    const minutes = Math.floor(elapsedSeconds / 60).toString().padStart(2, "0");
    const seconds = Math.floor(elapsedSeconds - 60 * minutes).toString().padStart(2, "0");
    return `${minutes}:${seconds}`
};

const elapsedSeconds = (timeString) => {
    const splitArray = timeString.split(":");
    const [minutes, seconds] = splitArray.map(Number);
    return minutes * 60 + seconds;
};

const Player = ({songsArray}) => {
    const {songId} = useParams();
    const [searchParams] = useSearchParams();
    const playlist = searchParams.get('playlist');
    let songIndex = -1
    for (let i = 0; i < songsArray.length; i++) {
        if (songsArray[i] && songsArray[i]._id === songId) {
            songIndex = i;
            break;
        }
    }
    const lastIndex = songsArray.length - 1
    const nextSong = songIndex === lastIndex ? songsArray[0]._id : songsArray[songIndex + 1]._id;
    const previousSong = songIndex === 0 ? songsArray[lastIndex]._id : songsArray[songIndex - 1]._id;
    const {image, name, duration, artist, audio} = songsArray.find(item => item._id === songId);
    const audioPlayer = useRef(null);
    const progressBar = useRef();
    const [isPlaying, setIsPlaying] = useState(Boolean(searchParams.get('playing')));
    const [currentTime, setCurrentTime] = useState(formatTime(0));
    const playPause = () => {
        isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
        setIsPlaying(!isPlaying);
    };
    const songChange = () => {
        isPlaying ? audioPlayer.current.play() : audioPlayer.current.pause();
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(isPlaying)
                setCurrentTime(formatTime(audioPlayer.current.currentTime));
                progressBar.current.style.setProperty("--_progress",
                    (audioPlayer.current.currentTime / elapsedSeconds(duration)) * 100 + '%'
                );
        }, 50);
        return () => clearInterval(intervalId);
    }, [isPlaying]);
    useEffect(() => {
        if (audioPlayer.current) {
            audioPlayer.current.play().catch(error => {
                console.log('Autoplay failed:', error);
            });
        }
    }, []);
    return (
        <div className="player">
            <div className="player__controllers">
                <Link to={`/song/${previousSong}&${playlist}&playing=${isPlaying}`}>
                    <FontAwesomeIcon
                        className="player__icon player__icon--previous"
                        icon={faBackwardStep}
                        onClick={() => songChange()}
                    />
                </Link>
                <FontAwesomeIcon
                    className="player__icon player__icon--play"
                    icon={isPlaying ? faCirclePause : faCirclePlay}
                    onClick={() => playPause()}
                />
                <Link to={`/song/${nextSong}&${playlist}&playing=${isPlaying}`}>
                    <FontAwesomeIcon
                        className="player__icon player__icon--next"
                        icon={faForwardStep}
                        onClick={() => songChange()}
                    />
                </Link>
            </div>

            <div className="player__progress">
                <div className="player__time">
                    {currentTime}
                </div>
                <div className="player__bar">
                    <div className="player__bar-progress" ref={progressBar}>
                    </div>
                </div>
                <div className="player__time">
                    {duration}
                </div>
            </div>
            <audio ref={audioPlayer} src={`${audio}`}></audio>
        </div>
    );
};

export default Player;