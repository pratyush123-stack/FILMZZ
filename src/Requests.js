const API_KEY = "a8cd0d40e1df0e1181349839433e667c";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchAnimatiomn: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
    fetchHistory: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
    fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchThriller: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

}

export default requests;

