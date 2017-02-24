/**
 * Created by DuanG on 2017/2/15.
 */
import * as React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, hashHistory,IndexRoute,Redirect} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {store} from "../store/index";
import {Counter} from "../component/Counter";
import configureStore from "../store/configureStore";
const history = syncHistoryWithStore(hashHistory, store);


export const routes=(
    <Provider store={configureStore({})}>
        <Router history={history}>
            <Route title="用户管理" path="/" component={Counter}>
            </Route>
        </Router>
    </Provider>
);