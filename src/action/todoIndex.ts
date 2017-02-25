import {CounterIndex} from "../model/counterIndex";
import {createAction} from "../utils/redux";
/**
 * Created by duanguang on 2017/2/25.
 */


export const CHANGE_COUNT='todoIndex/CHNAGE_COUNT';

export function changeCount(counterIndex:CounterIndex){
    return createAction(CHANGE_COUNT,counterIndex);
}