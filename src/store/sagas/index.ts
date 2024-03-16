import {takeEvery} from 'redux-saga/effects'
import {GET_USERS} from './home/types';
import {getUsersSaga} from './home';
export function* rootSaga() {
    yield takeEvery(GET_USERS, getUsersSaga)
}