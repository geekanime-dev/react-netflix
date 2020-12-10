export const Actions = {
    setTvShowsIsFetchingData: () => {
        return {
            type: 'SET_TV_SHOWS_IS_FETCHING_DATA',
        }
    },
    setTvShowsIsFetchingDataSuccess: (param) => {
        return {
            type: 'SET_TV_SHOWS_IS_FETCHING_DATA_SUCCESS',
            payload: param
        }
    },
    setTrendingTvShows: () => {
        return {
            type: 'SET_TRENDING_TV_SHOWS',
        }
    },
    setTrendingTvShowsSuccess: (param) => {
        return {
            type: 'SET_TRENDING_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setTopRatedTvShows: () => {
        return {
            type: 'SET_TOP_RATED_TV_SHOWS',
        }
    },
    setTopRatedTvShowsSuccess: (param) => {
        return {
            type: 'SET_TOP_RATED_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setActionTvShows: () => {
        return {
            type: 'SET_ACTION_TV_SHOWS',
        }
    },
    setActionTvShowsSuccess: (param) => {
        return {
            type: 'SET_ACTION_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setComedyTvShows: () => {
        return {
            type: 'SET_COMEDY_TV_SHOWS',
        }
    },
    setComedyTvShowsSuccess: (param) => {
        return {
            type: 'SET_COMEDY_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setHorrorTvShows: () => {
        return {
            type: 'SET_HORROR_TV_SHOWS',
        }
    },
    setHorrorTvShowsSuccess: (param) => {
        return {
            type: 'SET_HORROR_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setRomanceTvShows: () => {
        return {
            type: 'SET_ROMANCE_TV_SHOWS',
        }
    },
    setRomanceTvShowsSuccess: (param) => {
        return {
            type: 'SET_ROMANCE_TV_SHOWS_SUCCESS',
            payload: param
        }
    },
    setTvShowsDocumentaries: () => {
        return {
            type: 'SET_TV_SHOWS_DOCUMENTARIES',
        }
    },
    setTvShowsDocumentariesSuccess: (param) => {
        return {
            type: 'SET_TV_SHOWS_DOCUMENTARIES_SUCCESS',
            payload: param
        }
    },
}

export default Actions;