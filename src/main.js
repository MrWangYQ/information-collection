import './static/reset.css';
import './static/css/style.css';
import './static/font/iconfont.css';

import React, { Component, Fragment } from 'react';

import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import RouteConfig from './router/router.js';

import store from './store/store.js';

let { routes } = RouteConfig;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Fragment>
                <Route exact path='/' render={() => <Redirect to='begin'></Redirect>}></Route>
                {
                    routes.map((item, index) => {
                        return <Route key={index} path={item.path} render={(props) => {
                            return <item.component routes={item.children} {...props}></item.component>;
                        }}></Route>;
                    })
                }
            </Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);