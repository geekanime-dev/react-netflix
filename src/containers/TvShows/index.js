import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from './action';
import Row from '../../components/Row';

function TvShows() {
    const dispatch = useDispatch();
    const tvShowsList = useSelector(state => state.tvshows);
    useEffect(() => {
        dispatch(Actions.setTrendingTvShows())
        dispatch(Actions.setTopRatedTvShows())
        dispatch(Actions.setActionTvShows())
        dispatch(Actions.setComedyTvShows())
        dispatch(Actions.setHorrorTvShows())
        dispatch(Actions.setRomanceTvShows())
        dispatch(Actions.setTvShowsDocumentaries())
    }, []) // eslint-disable-next-line
    return (
        <React.Fragment>
            <Row title='Trending' isLargePoster={true} lists={tvShowsList.trending} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Top Rated TV Shows' isLargePoster={false} lists={tvShowsList.topRated} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Action TV Shows' isLargePoster={false} lists={tvShowsList.actionTvShows} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Comedy TV Shows' isLargePoster={false} lists={tvShowsList.comedyTvShows} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Horror TV Shows' isLargePoster={false} lists={tvShowsList.horrorTvShows} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Romance TV Shows' isLargePoster={false} lists={tvShowsList.romanceTvShows} isFetchingData={tvShowsList.isFetchingData} />
            <Row title='Documentaries' isLargePoster={false} lists={tvShowsList.documentaries} isFetchingData={tvShowsList.isFetchingData} />
        </React.Fragment>
    )
}
export default TvShows