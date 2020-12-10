import {
    put,
    takeLatest,
    call,
  } from 'redux-saga/effects';
import Actions from './action';
import axios from 'axios';

 export function* makeGetPublicKey() {
   const toBeCalled = () => axios({
    method: 'GET',
    url: 'https://omni.metrobank.ph/dev/mbx/security/authentication-public-key/',
    headers: 
      { 
       'cache-control': 'no-cache',
       'X-OS': 'Windows 10',
       'X-DEVICE-ID': 'bd5894acb319a0fd2c234e4743519253',
       'X-DEVICE': 'Chrome 83.0.4103.97' 
      } 
    }
  );
    const response = yield call(toBeCalled);
    yield put(Actions.setPublicKeySuccess(response.data.data));

  }
  
  export default function* authSaga() {
    yield takeLatest(Actions.setPublicKey().type, makeGetPublicKey);
  }
  