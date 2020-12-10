import {
    put,
    takeLatest,
    call,
} from 'redux-saga/effects';
import Actions from './action';
import fetchAPI from '../../API/API';

function* callAPIFunction(axiosParam, action) {
    yield put(Actions.setMoviesIsFetchingData());
    const response = yield call(axiosParam);
    yield put(Actions[action](response.data));
    yield put(Actions.setMoviesIsFetchingDataSuccess(false));
}

export function* makeGetTrendingTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchTrendingMovies, 'setTrendingMoviesSuccess')
}

export function* makeGetTopRatedTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchTopRatedMovies, 'setTopRatedMoviesSuccess')
}

export function* makeGetActionTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchActionMovies, 'setActionMoviesSuccess')
}

export function* makeGetComedyTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchComedyMovies, 'setComedyMoviesSuccess')
}

export function* makeGetHorrorTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchHorrorMovies, 'setHorrorMoviesSuccess')
}

export function* makeGetRomanceTVShows() {
    yield callAPIFunction(fetchAPI.movieServices.fetchRomanceMovies, 'setRomanceMoviesSuccess')
}

export function* makeGetDocumentaries() {
    yield callAPIFunction(fetchAPI.movieServices.fetchDocumentaryMovies, 'setMoviesDocumentariesSuccess')
}

export function* makeMoviesIsFetchingData() {
    yield put(Actions.setMoviesIsFetchingDataSuccess(true));
}

export default function* authSaga() {
    yield takeLatest(Actions.setMoviesIsFetchingData().type, makeMoviesIsFetchingData);
    yield takeLatest(Actions.setTrendingMovies().type, makeGetTrendingTVShows);
    yield takeLatest(Actions.setTopRatedMovies().type, makeGetTopRatedTVShows);
    yield takeLatest(Actions.setActionMovies().type, makeGetActionTVShows);
    yield takeLatest(Actions.setComedyMovies().type, makeGetComedyTVShows);
    yield takeLatest(Actions.setHorrorMovies().type, makeGetHorrorTVShows);
    yield takeLatest(Actions.setRomanceMovies().type, makeGetRomanceTVShows);
    yield takeLatest(Actions.setMoviesDocumentaries().type, makeGetDocumentaries);
}
