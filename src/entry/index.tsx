/**
 * Created by DuanG on 2017/2/15.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {routes} from "../config/routeConfig";
import {sagaMiddleware} from "../store/configureStore";
import {helloSaga} from "../action/sagas";
import Counter from "../component/Counter";
//sagaMiddleware.run(helloSaga)

console.log(routes)
ReactDOM.render(
    routes,
    document.getElementById('app')
);