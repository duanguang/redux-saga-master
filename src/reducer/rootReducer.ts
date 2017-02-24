/**
 * Created by duanguang on 2017/2/24.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

export interface IStoreState{

}

export const rootReducer=combineReducers({
    routing: routerReducer,
});//合并Reducer