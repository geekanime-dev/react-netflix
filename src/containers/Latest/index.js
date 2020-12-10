import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from './action';
import Row from '../../components/Row';

function Latest() {
    const dispatch = useDispatch();
    const latestList = useSelector(state => state.latest);
    useEffect(() => {
        dispatch(Actions.setTrendingAll())
        dispatch(Actions.setPopularMovies())
        dispatch(Actions.setUpcomingMovies())
        dispatch(Actions.setPopularTvShows())
    }, []) // eslint-disable-next-line

    return (
        <React.Fragment>
            <Row title='Trending Movies and TV Shows' isLargePoster={true} lists={latestList.trending} isFetchingData={latestList.isFetchingData} />
            <Row title='Popular Movies' isLargePoster={false} lists={latestList.popularMovies} isFetchingData={latestList.isFetchingData} />
            <Row title='Upcoming Movies' isLargePoster={false} lists={latestList.upcomingMovies} isFetchingData={latestList.isFetchingData} />
            <Row title='Popular TV Shows' isLargePoster={false} lists={latestList.popularTvShows} isFetchingData={latestList.isFetchingData} />
        </React.Fragment>
    )
}
export default Latest