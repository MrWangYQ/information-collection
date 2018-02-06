import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './sex.css';
import Header from '../head/header';
import Check from './check';
import DialogBase from '../dialog/index';
import SinglePick from '../singlePick/singlePick';
import { connect } from 'react-redux';
console.log(connect);
class Sex extends Component {
    constructor () {
        super();
        this.state = {
            switchBtn: true,
            active: 'dialogBoxActive',
            activeIndex: 0,
            sexData: [
                {
                    src: 'icon iconfont icon-nan',
                    name: '我是男神',
                    classname: 'active',
                    id: 0
                },
                {
                    src: 'icon iconfont icon-nv',
                    name: '我是女神',
                    classname: 'active',
                    id: 1
                }
            ]
        };
        this.open = this.open.bind(this);
        this.clickDialog = this.clickDialog.bind(this);
        this.pick = this.pick.bind(this);
    }
    open (val) {
        if (this.state.switchBtn) {
            this.setState((state) => {
                state.switchBtn = false;
                return state;
            });
        } else {
            this.setState((state) => {
                state.switchBtn = true;
                return state;
            });
        }
    }
    clickDialog () {
        this.refs.dialog.open();
    }
    callback () {
        this.props.history.push('/question/historymedical');
    }
    pick (idx) {
        console.log(idx);
        if (idx === 0) {
            this.props.setGender('男');
        } else {
            this.props.setGender('女');
        }
    }
    render () {
        let { sexData } = this.state;
        return (
            <Fragment>
                <div className='sex'>
                    <Header title='基本信息'></Header>
                    <div className="sex-content">
                        <div className='sex-sub' ref='sex'>
                            <div className="sex-title">请选择您的性别</div>
                            <div className='sex-sub-con'>
                                <SinglePick callback={this.pick} ref='sing'>
                                    {
                                        sexData.map((item, index) => {
                                            return (
                                                <div className="sex-icon" id={index} key={index}>
                                                    <i className={item.src}></i>
                                                    <div className='check'>
                                                        <p>{item.name}</p>
                                                        <span></span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </SinglePick>
                            </div>
                        </div>
                        <button className='sexBtn' onClick={this.clickDialog}></button>
                        <DialogBase ref='dialog' callback={(props) => { this.callback(props); }} active='animated fadeInDown'>
                            亲，我们为您准备了60道体质测试题，请耐心如实答题，获取真实体质结果
                        </DialogBase>
                    </div>
                </div>
            </Fragment>
        );
    }
    componentDidMount () {
        console.log(this.refs.sex);
        console.log(this.refs.sing, '<1321> </1321>');
    }
};
function mapStateToProps (state) {
    return {
        gender: state.gender
    };
}
function mapDispatchToProps (dispath) {
    return {
        setGender: (data) => {
            console.log(data);
            dispath({
                type: 'update_gender',
                data: data
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sex);