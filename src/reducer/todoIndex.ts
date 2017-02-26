import {CounterIndex} from "../model/counterIndex";
import {IAction} from "../../typings/mobx/mobx";
import {IActionGeneric,combineReducers} from 'redux';
import * as ActionTypes from '../action/todoIndex';
/**
 * Created by duanguang on 2017/2/25.
 */



export interface ICounterStore{
    todoIndex:ITodoReducer;
}

export interface ITodoReducer{
    counterIndex:CounterIndex;
}

const initState:ITodoReducer={
    counterIndex:new CounterIndex()
}

/*function counterIndex(state:CounterIndex=initState.counterIndex,action:IActionGeneric<CounterIndex>):CounterIndex{
    switch(action.type){
        case ActionTypes.CHANGE_COUNT:
            //return Object.assign({},action.payload);
            return action.payload;
        default:
            return state;
    }
}*/
function counterIndex(state:CounterIndex=initState.counterIndex,action:IActionGeneric<CounterIndex>):CounterIndex{
    switch(action.type){
        case ActionTypes.CHANGE_COUNT:
            //return Object.assign({},action.payload);
            return action.payload;
        case 'INCREMENT':
            console.log(state)
            state.count=state.count+1;
            return Object.assign({},state);
        default:
            return state;
    }
}
export default combineReducers({
    counterIndex
})