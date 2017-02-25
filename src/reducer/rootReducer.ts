/**
 * Created by duanguang on 2017/2/24.
 */
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import todoIndex from "todoIndex";

export interface IStoreState{

}

export const rootReducer=combineReducers({
    todoIndex,
    routing: routerReducer,
});//合并Reducer