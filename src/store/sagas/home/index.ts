import {put} from 'redux-saga/effects'
import {setUsers} from '../../home/slice';

export function* getUsersSaga(): Generator<any, void, any> {
    try {
        const users = yield fetch('http://localhost:8080/users').then(res => res.json())
        console.log(users);
        yield put(setUsers(users))
    } catch (e) {
        console.error(e)
    }
}