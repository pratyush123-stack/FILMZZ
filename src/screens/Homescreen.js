import React from 'react'
import Row from '../Row';
import requests from '../Requests';
import '../Row.css';
import Nav from '../Nav';
import Banner from '../Banner';
import './homescreen.css'

function Homescreen() {
    return (
        <div className="Homescreen">
            <Banner/>
            <Nav/>
            <Row title = "Trending" fetchurl={requests.fetchTrending}/>
            <Row title = "TopRated" fetchurl={requests.fetchTopRated} />
            <Row title = "Action" fetchurl={requests.fetchActionMovies}/>
            <Row title = "Comedy" fetchurl={requests.fetchComedyMovies}/>
            <Row title = "Romance" fetchurl={requests.fetchRomanceMovies}/>
            <Row title = "Adventure" fetchurl={requests.fetchAdventure}/>
            <Row title = "Animation" fetchurl={requests.fetchAnimatiomn}/>
            <Row title = "Crime" fetchurl={requests.fetchCrime}/>
            <Row title = "Science Fiction" fetchurl={requests.fetchScienceFiction}/>
            <Row title = "Thriller" fetchurl={requests.fetchThriller}/>
            <Row title = "Horror" fetchurl={requests.fetchHorrorMovies}/>
            <Row title = "Drama" fetchurl={requests.fetchDrama}/>
            <Row title = "Family" fetchurl={requests.fetchFamily}/>
            <Row title = "History" fetchurl={requests.fetchHistory}/>
            <Row title = "Mystery" fetchurl={requests.fetchMystery}/>
            <Row title = "War" fetchurl={requests.fetchWar}/>
            <Row title = "Documentaries" fetchurl={requests.fetchDocumentaries}/>
            <Row title = "Western" fetchurl={requests.fetchWestern}/>
        </div>
            )
}

export default Homescreen;
