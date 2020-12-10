import { fork } from 'redux-saga/effects';
import AuthSaga from './containers/LogIn/saga';
import HomeSaga from './containers/Home/saga';
import TVShowsSaga from './containers/TvShows/saga';
import MoviesSaga from './containers/Movie/saga';
import LatestSaga from './containers/Latest/saga';

export default function* root() {
    yield fork(AuthSaga);
    yield fork(HomeSaga);
    yield fork(TVShowsSaga);
    yield fork(MoviesSaga);
    yield fork(LatestSaga);
  }