import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from './action';
import Row from '../../components/Row';

function Movie() {
    const dispatch = useDispatch();
    const moviesList = useSelector(state => state.movies);
    useEffect(() => {
        dispatch(Actions.setTrendingMovies())
        dispatch(Actions.setTopRatedMovies())
        dispatch(Actions.setActionMovies())
        dispatch(Actions.setComedyMovies())
        dispatch(Actions.setHorrorMovies())
        dispatch(Actions.setRomanceMovies())
        dispatch(Actions.setMoviesDocumentaries())
    }, []) // eslint-disable-next-line

    return (
         <React.Fragment>
            <Row title='Trending' isLargePoster={true} lists={moviesList.trending} isFetchingData={moviesList.isFetchingData} />
            <Row title='Top Rated Movies' isLargePoster={false} lists={moviesList.topRated} isFetchingData={moviesList.isFetchingData} />
            <Row title='Action Movies' isLargePoster={false} lists={moviesList.actionMovies} isFetchingData={moviesList.isFetchingData} />
            <Row title='Comedy Movies' isLargePoster={false} lists={moviesList.comedyMovies} isFetchingData={moviesList.isFetchingData} />
            <Row title='Horror Movies' isLargePoster={false} lists={moviesList.horrorMovies} isFetchingData={moviesList.isFetchingData} />
            <Row title='Romance Movies' isLargePoster={false} lists={moviesList.romanceMovies} isFetchingData={moviesList.isFetchingData} />
            <Row title='Documentaries' isLargePoster={false} lists={moviesList.documentaries} isFetchingData={moviesList.isFetchingData} />
        </React.Fragment>
    )
}
export default Movie