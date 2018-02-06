import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import Header from '../head/header';
import './begin.css';
class Begin extends Component {
    constructor () {
        super();
        this.go = this.go.bind(this);
    }
    go () {
        this.props.history.push('/sex');
    }
    render () {
        return (
            <div className='begin'>
                <Header title='小鲜测评' icon='icon iconfont icon-zuojiantou'></Header>
                <div className="begin-content">
                    <button className='beginBtn'><NavLink to='/sex'>开始</NavLink></button>
                    <p className='begin-p'>请根据最近三个月的体验和感觉回答问题。孕妇不建议使用本测试</p>
                </div>
            </div>
        );
    }
}
export default Begin;