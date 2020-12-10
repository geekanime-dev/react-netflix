export const Actions = {
    setIsFetchingData: () => {
        return {
            type: 'SET_IS_FETCHING_DATA',
        }
    },
    setIsFetchingDataSuccess: (param) => {
        return {
            type: 'SET_IS_FETCHING_DATA_SUCCESS',
            payload: param
        }
    },
    setNetflixOriginals: () => {
        return {
            type: 'SET_NETFLIX_ORIGINALS',
        }
    },
    setNetflixOriginalsSuccess: (param) => {
        return {
            type: 'SET_NETFLIX_ORIGINALS_SUCCESS',
            payload: param
        }
    },
    setTrending: () => {
        return {
            type: 'SET_TRENDING',
        }
    },
    setTrendingSuccess: (param) => {
        return {
            type: 'SET_TRENDING_SUCCESS',
            payload: param
        }
    },
    setTopRated: () => {
        return {
            type: 'SET_TOP_RATED',
        }
    },
    setTopRatedSuccess: (param) => {
        return {
            type: 'SET_TOP_RATED_SUCCESS',
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
    setDocumentaries: () => {
        return {
            type: 'SET_DOCUMENTARIES',
        }
    },
    setDocumentariesSuccess: (param) => {
        return {
            type: 'SET_DOCUMENTARIES_SUCCESS',
            payload: param
        }
    },
}

export default Actions;