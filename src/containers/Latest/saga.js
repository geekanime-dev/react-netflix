import {
    put,
    takeLatest,
    call,
} from 'redux-saga/effects';
import Actions from './action';
import fetchAPI from '../../API/API';

function* callAPIFunction(axiosParam, action) {
    yield put(Actions.setLatestIsFetchingData());
    const response = yield call(axiosParam);
    yield put(Actions[action](response.data));
    yield put(Actions.setLatestIsFetchingDataSuccess(false));
}

export function* makeGetTrendingAll() {
    yield callAPIFunction(fetchAPI.latestServices.fetchTrending, 'setTrendingAllSuccess')
}

export function* makeGetPopularMovies() {
    yield callAPIFunction(fetchAPI.latestServices.fetchPopularMovies, 'setPopularMoviesSuccess')
}

export function* makeGetUpcomingMovies() {
    yield callAPIFunction(fetchAPI.latestServices.fetchUpcomingMovies, 'setUpcomingMoviesSuccess')
}

export function* makeGePopularTVShows() {
    yield callAPIFunction(fetchAPI.latestServices.fetchPopularTVShows, 'setPopularTvShowsSuccess')
}

export function* makeAllIsFetchingData() {
    yield put(Actions.setLatestIsFetchingDataSuccess(true));
}

export default function* authSaga() {
    yield takeLatest(Actions.setLatestIsFetchingData().type, makeAllIsFetchingData);
    yield takeLatest(Actions.setTrendingAll().type, makeGetTrendingAll);
    yield takeLatest(Actions.setPopularMovies().type, makeGetPopularMovies);
    yield takeLatest(Actions.setUpcomingMovies().type, makeGetUpcomingMovies);
    yield takeLatest(Actions.setPopularTvShows().type, makeGePopularTVShows);
}
