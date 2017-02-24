/**
 * Created by duanguang on 2017/2/24.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {hashHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import {promiseMiddleware} from '../utils/redux';
import {rootReducer} from "../reducer/rootReducer";


export const history:any = hashHistory;
const reduxRouterMiddleware = routerMiddleware(hashHistory);
let createStoreWithMiddleware;

//export const sagaMiddleware = createSagaMiddleware();


if(process.env.NODE_ENV!=='production'){
    const devFuncs = [
        (<window>window).devToolsExtension ? (<window>window).devToolsExtension() : f => f
    ];
    createStoreWithMiddleware =compose(
        applyMiddleware(reduxRouterMiddleware,thunkMiddleware,promiseMiddleware),
        ...(devFuncs as any)
    )(createStore);//调用 applyMiddleware，使用 middleware 增强 createStore：
}
else {
    createStoreWithMiddleware = compose(
        applyMiddleware(reduxRouterMiddleware,thunkMiddleware,promiseMiddleware)
    )(createStore);//从右到左来组合多个函数。
}

export default function configureStore (initialState) {
    const store=createStoreWithMiddleware(rootReducer,initialState);
    return store;
}
