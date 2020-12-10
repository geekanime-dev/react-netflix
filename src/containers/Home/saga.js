import {
    put,
    takeLatest,
    call,
  } from 'redux-saga/effects';
import Actions from './action';
import fetchAPI from '../../API/API';

  export function* makeGetNetflixOriginals() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchNetflixOriginals);
    yield put(Actions.setNetflixOriginalsSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetTrending() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchTrending);
    yield put(Actions.setTrendingSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetTopRated() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchTopRated);
    yield put(Actions.setTopRatedSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetActionMovies() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchActionMovies);
    yield put(Actions.setActionMoviesSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetComedyMovies() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchComedyMovies);
    yield put(Actions.setComedyMoviesSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetHorrorMovies() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchHorrorMovies);
    yield put(Actions.setHorrorMoviesSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetRomanceMovies() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchRomanceMovies);
    yield put(Actions.setRomanceMoviesSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeGetDocumentaries() {
    yield put(Actions.setIsFetchingData());
    const response = yield call(fetchAPI.homeServices.fetchDocumentaries);
    yield put(Actions.setDocumentariesSuccess(response.data));
    yield put(Actions.setIsFetchingDataSuccess(false));
  }

  export function* makeIsFetchingData() {
    yield put(Actions.setIsFetchingDataSuccess(true));
  }
  
  export default function* authSaga() {
    yield takeLatest(Actions.setIsFetchingData().type, makeIsFetchingData);
    yield takeLatest(Actions.setNetflixOriginals().type, makeGetNetflixOriginals);
    yield takeLatest(Actions.setTrending().type, makeGetTrending);
    yield takeLatest(Actions.setTopRated().type, makeGetTopRated);
    yield takeLatest(Actions.setActionMovies().type, makeGetActionMovies);
    yield takeLatest(Actions.setComedyMovies().type, makeGetComedyMovies);
    yield takeLatest(Actions.setHorrorMovies().type, makeGetHorrorMovies);
    yield takeLatest(Actions.setRomanceMovies().type, makeGetRomanceMovies);
    yield takeLatest(Actions.setDocumentaries().type, makeGetDocumentaries);
  }
  