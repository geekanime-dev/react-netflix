import HomePage from '../containers/Home';
import TvShowsPage from '../containers/TvShows'
import MoviesPage from '../containers/Movie'
import LatestPage from '../containers/Latest'

const routes = {
    Home: {
        path: '/',
        exact: true,
        component: HomePage,
    },
    TvShows: {
        path: '/tvshows',
        exact: true,
        component: TvShowsPage,
    },
    Movies: {
        path: '/movies',
        exact: true,
        component: MoviesPage,
    },
    Latest: {
        path: '/latest',
        exact: true,
        component: LatestPage,
    },
    MyList: {
        path: '/mylist',
        exact: true,
        //component: MyListPage,
    },
}

export default routes;