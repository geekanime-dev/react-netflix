import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Actions from './action';
import { withStyles } from '@material-ui/core';
import { DEFAULT_STYLES } from './constants';
import Row from '../../components/Row';
import Banner from '../Banner';
import AppNavBar from '../AppBar';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';
import { useHomeSelectors } from './useSelectors'
const styles = theme => DEFAULT_STYLES;

function Home({classes}) {
    const dispatch = useDispatch();
    const movieLists = useHomeSelectors();
    useLayoutEffect(() => {
        dispatch(Actions.setNetflixOriginals());
        dispatch(Actions.setTopRated());
        dispatch(Actions.setActionMovies());
        dispatch(Actions.setComedyMovies());
        dispatch(Actions.setHorrorMovies());
        dispatch(Actions.setRomanceMovies());
        dispatch(Actions.setDocumentaries());
    }, []) // eslint-disable-next-line

    return (
        <div className={classes.root}>
            <AppNavBar />
            <Banner />
            <Switch>
                <Route path={routes.Home.path} exact={routes.Home.exact} component={routes.Home.component}>
                    <Row title='Netflix Originals' isLargePoster={true} lists={movieLists.netflixOriginals} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Top Rated' isLargePoster={false} lists={movieLists.topRated} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Action Movies' isLargePoster={false} lists={movieLists.actionMovies} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Comedy Movies' isLargePoster={false} lists={movieLists.comedyMovies} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Horror Movies' isLargePoster={false} lists={movieLists.horrorMovies} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Romance Movies' isLargePoster={false} lists={movieLists.romanceMovies} isFetchingData={movieLists.isFetchingData} />
                    <Row title='Documentaries' isLargePoster={false} lists={movieLists.documentaries} isFetchingData={movieLists.isFetchingData} />
                </Route>
                <Route path={routes.TvShows.path} exact={routes.TvShows.exact} component={routes.TvShows.component}></Route>
                <Route path={routes.Movies.path} exact={routes.Movies.exact} component={routes.Movies.component}></Route>
                <Route path={routes.Latest.path} exact={routes.Latest.exact} component={routes.Latest.component}></Route>
            </Switch>
        </div>
    )
}

export default withStyles(styles)(Home)