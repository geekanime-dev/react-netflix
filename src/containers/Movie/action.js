export const Actions = {
    setMoviesIsFetchingData: () => {
        return {
            type: 'SET_MOVIES_IS_FETCHING_DATA',
        }
    },
    setMoviesIsFetchingDataSuccess: (param) => {
        return {
            type: 'SET_MOVIES_IS_FETCHING_DATA_SUCCESS',
            payload: param
        }
    },
    setTrendingMovies: () => {
        return {
            type: 'SET_TRENDING_MOVIES',
        }
    },
    setTrendingMoviesSuccess: (param) => {
        return {
            type: 'SET_TRENDING_MOVIES_SUCCESS',
            payload: param
        }
    },
    setTopRatedMovies: () => {
        return {
            type: 'SET_TOP_RATED_MOVIES',
        }
    },
    setTopRatedMoviesSuccess: (param) => {
        return {
            type: 'SET_TOP_RATED_MOVIES_SUCCESS',
            payload: param
        }
    },
    setActionMovies: () => {
        return {
            type: 'SET_ACTION_MOVIES',
        }
    },
    setActionMoviesSuccess: (param) => {
        return {
            type: 'SET_ACTION_MOVIES_SUCCESS',
            payload: param
        }
    },
    setComedyMovies: () => {
        return {
            type: 'SET_COMEDY_MOVIES',
        }
    },
    setComedyMoviesSuccess: (param) => {
        return {
            type: 'SET_COMEDY_MOVIES_SUCCESS',
            payload: param
        }
    },
    setHorrorMovies: () => {
        return {
            type: 'SET_HORROR_MOVIES',
        }
    },
    setHorrorMoviesSuccess: (param) => {
        return {
            type: 'SET_HORROR_MOVIES_SUCCESS',
            payload: param
        }
    },
    setRomanceMovies: () => {
        return {
            type: 'SET_ROMANCE_MOVIES',
        }
    },
    setRomanceMoviesSuccess: (param) => {
        return {
            type: 'SET_ROMANCE_MOVIES_SUCCESS',
            payload: param
        }
    },
    setMoviesDocumentaries: () => {
        return {
            type: 'SET_MOVIES_DOCUMENTARIES',
        }
    },
    setMoviesDocumentariesSuccess: (param) => {
        return {
            type: 'SET_MOVIES_DOCUMENTARIES_SUCCESS',
            payload: param
        }
    },
}

export default Actions;