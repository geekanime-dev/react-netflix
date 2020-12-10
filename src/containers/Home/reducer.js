const initialState = {
    netflixOriginals: {},
    trending:{},
    topRated:{},
    actionMovies:{},
    comedyMovies:{},
    horrorMovies:{},
    romanceMovies:{},
    documentaries:{},
    isFetchingData: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_IS_FETCHING_DATA_SUCCESS':
            return ({
                ...state,
                isFetchingData: action.payload,
            })
        case 'SET_NETFLIX_ORIGINALS_SUCCESS':
            return ({
                ...state,
                netflixOriginals: action.payload,
            })
        case 'SET_TRENDING_SUCCESS':
            return ({
                ...state,
                trending: action.payload,
            })
        case 'SET_TOP_RATED_SUCCESS':
            return ({
                ...state,
                topRated: action.payload,
            })
        case 'SET_ACTION_MOVIES_SUCCESS':
            return ({
                ...state,
                actionMovies: action.payload,
            })
        case 'SET_COMEDY_MOVIES_SUCCESS':
            return ({
                ...state,
                comedyMovies: action.payload,
            })
        case 'SET_DOCUMENTARIES_SUCCESS':
            return ({
                ...state,
                documentaries: action.payload,
            })
        case 'SET_HORROR_MOVIES_SUCCESS':
            return ({
                ...state,
                horrorMovies: action.payload,
            })
        case 'SET_ROMANCE_MOVIES_SUCCESS':
            return ({
                ...state,
                romanceMovies: action.payload,
            })    
        default:
            return state;
    }
}

export default reducer;