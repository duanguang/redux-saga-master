/**
 * Created by duanguang on 2017/2/26.
 */
import {takeEvery} from 'redux-saga';
import {put} from  'redux-saga/effects';
import * as ActionTypes from '../action/todoIndex';
export function* incrementAsync(action){
    yield put({type:'INCREMENT'});
}

export default function* rootSaga () {
    yield takeEvery('INCREMENT_ASYNC',incrementAsync);
}
export function* helloSaga() {
    console.log('Hello Sagas!');
}