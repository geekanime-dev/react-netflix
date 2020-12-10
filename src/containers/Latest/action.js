export const Actions = {
    setLatestIsFetchingData: () => {
        return {
            type: 'SET_LATEST_IS_FETCHING_DATA',
        }
    },
    setLatestIsFetchingDataSuccess: (param) => {
        return {
            type: 'SET_LATEST_IS_FETCHING_DATA_SUCCESS',
            payload: param
        }
    },
    setTrendingAll: () => {
        return {
            type: 'SET_TRENDING_ALL',
        }
    },
    setTrendingAllSuccess: (param) => {
        return {
            type: 'SET_TRENDING_ALL_SUCCESS',
            payload: param
        }
    },
    setPopularMovies: () => {
        return {
            type: 'SET_POPULAR_MOVIES',
        }
    },
    setPopularMoviesSuccess: (param) => {
        return {
            type: 'SET_POPULAR_MOVIES_SUCCESS',
            payload: param
        }
    },
    setUpcomingMovies: () => {
        return {
            type: 'SET_UPCOMING_MOVIES',
        }
    },
    setUpcomingMoviesSuccess: (param) => {
        return {
            type: 'SET_UPCOMING_MOVIES_SUCCESS',
            payload: param
        }
    },
    setPopularTvShows: () => {
        return {
            type: 'SET_POPULAR_TV_SHOWS',
        }
    },
    setPopularTvShowsSuccess: (param) => {
        return {
            type: 'SET_POPULAR_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
}

export default Actions;