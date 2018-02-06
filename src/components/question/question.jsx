import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
class Question extends Component {
    render () {
        let {routes} = this.props;
        return (
            <Fragment>
                {
                    routes.map((value, index) => {
                        return <Route key={index} path={value.path} render={(props) => {
                            return <value.component {...props}></value.component>;
                        }}></Route>;
                    })
                }
            </Fragment>
        );
    }
}
export default Question;