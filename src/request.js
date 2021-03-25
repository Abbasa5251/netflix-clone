const API_KEY = `${process.env.REACT_APP_API_KEY}`;

const requests = {
	fetchTrendingMovie: `/trending/movie/week?api_key=${API_KEY}`,
	fetchTrendingTv: `/trending/tv/week?api_key=${API_KEY}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
	fetchPopularMovies: `/movie/popular?api_key=${API_KEY}`,
	fetchPopularTv: `/tv/popular?api_key=${API_KEY}`,
	fetchTopRated: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchSciFi: `discover/movie?api_key=${API_KEY}&with_generes=878`,
	fetchAnimation: `discover/movie?api_key=${API_KEY}&with_generes=16`,
	fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}`,
	fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
