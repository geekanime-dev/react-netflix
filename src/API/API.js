import axios from 'axios';
import { movieAPIKey, APP } from '../config';

//pervious app
// const axiosTemplate = () => axios({
//     method: 'GET',
//     url: '',
//     headers: 
//       { 
       
//       },
//     data: 
//       {

//       }
//     }
// );

//new app
// export const TMDBInstance = axios.create({
// 	baseURL: APP.TMDBWebServices.baseURL
// });

export const requests = {
	homeServices: {
		fetchNetflixOriginals: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_networks=213`,
		  }),
		fetchTopRated: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/movie/top_rated?api_key=${movieAPIKey}&language=en-US`,
		  }),
		fetchActionMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=28`,
		  }),
		fetchComedyMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=35`,
		  }),
		fetchHorrorMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=27`,
		  }),
		fetchRomanceMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=10749`,
		  }),
		fetchDocumentaries: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=99`,
		  }),
	},
	tvShowServices: {
		fetchTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&language=en-US`
		}),
		fetchTrendingTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/trending/tv/day?api_key=${movieAPIKey}`,
		  }),
		fetchTopRatedTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/tv/top_rated?api_key=${movieAPIKey}&language=en-US`,
		  }),
		fetchActionTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_genres=10759`
		}),
		fetchComedyTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_genres=35`,
		  }),
		fetchHorrorTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_genres=27`,
		  }),
		fetchRomanceTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_genres=10749`,
		  }),
		fetchTVShowDocumentaries: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/tv?api_key=${movieAPIKey}&with_genres=99`,
		  }),
	},
	movieServices: {
		fetchMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&language=en-US`,
		}),
		fetchTrendingMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/trending/movie/day?api_key=${movieAPIKey}`,
		}),
		fetchTopRatedMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/movie/top_rated?api_key=${movieAPIKey}&language=en-US`,
		  }),
		fetchActionMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=28`,
		  }),
		fetchComedyMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=35`,
		  }),
		fetchHorrorMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=27`,
		  }),
		fetchRomanceMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=10749`,
		  }),
		fetchDocumentaryMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/discover/movie?api_key=${movieAPIKey}&with_genres=99`,
		  }),
	},
	latestServices: {
		fetchTrending: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/trending/all/week?api_key=${movieAPIKey}&language=en-US`,
		}),
		fetchPopularMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/movie/popular?api_key=${movieAPIKey}&language=en-US`,
		}),
		fetchUpcomingMovies: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/movie/upcoming?api_key=${movieAPIKey}&language=en-US`,
		}),
		fetchPopularTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/tv/popular?api_key=${movieAPIKey}&language=en-US`,
		}),
		fetchUpcomingTVShows: () => axios({
			method: 'GET',
			url: `${APP.TMDBWebServices.baseURL}/tv/upcoming?api_key=${movieAPIKey}&language=en-US`,
		}),
	},
	mylistServices: {

	},
}
export default requests;