import React, {useState, useEffect} from 'react';
import './banner.css';
import axios from './axios.js';
import requests from './Requests.js';
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
function Banner() {

    const[movie, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            );
            return request;
        }
        fetchData();
    }, [])

    function truncate(string, n){
        return string?.length >n ?  string.substr(0,n-1)+'...':string;
    }

    const opts = {
        height: "390",
        width:"100%",
        playerVars:{autoplay: 1,},
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        }
        else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || movie?.original_title||"")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name || movie?.original_title}
                </h1>
                <div className="banner_buttons">
                    <button onClick={() => handleClick(movie)}  className="banner_button1">Play</button>
                    <button className="banner_button2">Info</button>
                </div>
                <h1 className="banner_desc">{truncate(movie?.overview,160)}</h1>
            </div>
            <div className="banner_foot"/>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </header>
    )
}

export default Banner
