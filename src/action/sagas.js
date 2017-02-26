/**
 * Created by duanguang on 2017/2/26.
 */
import {takeEvery,delay,takeLatest} from 'redux-saga';
import {put,call,fork} from  'redux-saga/effects';
import * as ActionTypes from '../action/todoIndex';
export function* incrementAsync(action){
    yield put({type:'INCREMENT'});
    //yield call(delay, 1000);
   // yield put({type:'DECREMENT'});
}

export function* decrementAsync(action){
    yield [
        call(()=>put({type:'DECREMENT'})),
        call(()=>put({type:'INCREMENT'}))
    ]
   // yield put({type:'DECREMENT'});
}
export default function* rootSaga () {
    //yield takeEvery('INCREMENT_ASYNC',incrementAsync);
    yield takeLatest('INCREMENT_ASYNC',decrementAsync);
}
export function* helloSaga() {
    console.log('Hello Sagas!');
}