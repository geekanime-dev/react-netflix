const initialState = {
    trending:{},
    latestMovies:{},
    latestTvShows:{},
    popularMovies:{},
    upcomingMovies:{},
    popularTvShows:{},
    isFetchingData: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LATEST_IS_FETCHING_DATA_SUCCESS':
            return ({
                ...state,
                isFetchingData: action.payload,
            })
        case 'SET_TRENDING_ALL_SUCCESS':
            return ({
                ...state,
                trending: action.payload,
            })
        case 'SET_LATEST_MOVIES_SUCCESS':
            return ({
                ...state,
                latestMovies: action.payload,
            })
        case 'SET_POPULAR_MOVIES_SUCCESS':
            return ({
                ...state,
                popularMovies: action.payload,
            })
        case 'SET_UPCOMING_MOVIES_SUCCESS':
            return ({
                ...state,
                upcomingMovies: action.payload,
            })
        case 'SET_LATEST_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                latestTvShows: action.payload,
            })
        case 'SET_POPULAR_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                popularTvShows: action.payload,
            })
        default:
            return state;
    }
}

export default reducer;