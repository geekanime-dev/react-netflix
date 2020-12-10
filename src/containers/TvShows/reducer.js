const initialState = {
    trending:{},
    topRated:{},
    actionTvShows:{},
    comedyTvShows:{},
    horrorTvShows:{},
    romanceTvShows:{},
    documentaries:{},
    isFetchingData: false,
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TV_SHOWS_IS_FETCHING_DATA_SUCCESS':
            return ({
                ...state,
                isFetchingData: action.payload,
            })
        case 'SET_TRENDING_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                trending: action.payload,
            })
        case 'SET_TOP_RATED_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                topRated: action.payload,
            })
        case 'SET_ACTION_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                actionTvShows: action.payload,
            })
        case 'SET_COMEDY_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                comedyTvShows: action.payload,
            })
        case 'SET_TV_SHOWS_DOCUMENTARIES_SUCCESS':
            return ({
                ...state,
                documentaries: action.payload,
            })
        case 'SET_HORROR_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                horrorTvShows: action.payload,
            })
        case 'SET_ROMANCE_TV_SHOWS_SUCCESS':
            return ({
                ...state,
                romanceTvShows: action.payload,
            })    
        default:
            return state;
    }
}

export default reducer;