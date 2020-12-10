import { combineReducers } from 'redux';
import {reducer as AuthReducer} from './containers/Auth/reducer';
import {reducer as LogInReducer} from './containers/LogIn/reducer';
import {reducer as HomeReducer} from './containers/Home/reducer';
import {reducer as TVShowsReducer} from './containers/TvShows/reducer';
import {reducer as MoviesReducer} from './containers/Movie/reducer';
import {reducer as LatestReducer} from './containers/Latest/reducer';

export default combineReducers({
    auth: AuthReducer,
    login: LogInReducer,
    home: HomeReducer,
    tvshows: TVShowsReducer,
    movies: MoviesReducer,
    latest: LatestReducer,
})