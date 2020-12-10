import {
    put,
    takeLatest,
    call,
} from 'redux-saga/effects';
import Actions from './action';
import fetchAPI from '../../API/API';

function* callAPIFunction(axiosParam, action) {
    yield put(Actions.setTvShowsIsFetchingData());
    const response = yield call(axiosParam);
    yield put(Actions[action](response.data));
    yield put(Actions.setTvShowsIsFetchingDataSuccess(false));
}

export function* makeGetTrendingTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchTrendingTVShows, 'setTrendingTvShowsSuccess')
}

export function* makeGetTopRatedTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchTopRatedTVShows, 'setTopRatedTvShowsSuccess')
}

export function* makeGetActionTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchActionTVShows, 'setActionTvShowsSuccess')
}

export function* makeGetComedyTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchComedyTVShows, 'setComedyTvShowsSuccess')
}

export function* makeGetHorrorTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchHorrorTVShows, 'setHorrorTvShowsSuccess')
}

export function* makeGetRomanceTVShows() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchRomanceTVShows, 'setRomanceTvShowsSuccess')
}

export function* makeGetDocumentaries() {
    yield callAPIFunction(fetchAPI.tvShowServices.fetchTVShowDocumentaries, 'setTvShowsDocumentariesSuccess')
}

export function* makeTVShowsIsFetchingData() {
    yield put(Actions.setTvShowsIsFetchingDataSuccess(true));
}

export default function* authSaga() {
    yield takeLatest(Actions.setTvShowsIsFetchingData().type, makeTVShowsIsFetchingData);
    yield takeLatest(Actions.setTrendingTvShows().type, makeGetTrendingTVShows);
    yield takeLatest(Actions.setTopRatedTvShows().type, makeGetTopRatedTVShows);
    yield takeLatest(Actions.setActionTvShows().type, makeGetActionTVShows);
    yield takeLatest(Actions.setComedyTvShows().type, makeGetComedyTVShows);
    yield takeLatest(Actions.setHorrorTvShows().type, makeGetHorrorTVShows);
    yield takeLatest(Actions.setRomanceTvShows().type, makeGetRomanceTVShows);
    yield takeLatest(Actions.setTvShowsDocumentaries().type, makeGetDocumentaries);
}
