import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './allergenicfood.css';
import Header from '../../components/head/header';
import MultiplePick from '../multiplePick/multiplePick';
import SinglePick from '../singlePick/singlePick';
import { connect } from 'react-redux';
class AllergenicFood extends Component {
    constructor () {
        super();
        this.state = {
            brr: [
                {
                    id: 0,
                    name: '羊肉'
                },
                {
                    id: 1,
                    name: '海鲜'
                },
                {
                    id: 2,
                    name: '芹菜'
                },
                {
                    id: 3,
                    name: '胡萝卜'
                },
                {
                    id: 4,
                    name: '芹菜'
                },
                {
                    id: 5,
                    name: '西红柿'
                },
                {
                    id: 6,
                    name: '白菜'
                },
                {
                    id: 7,
                    name: '土豆'
                }
            ],
            arr: [
                {
                    id: 0,
                    name: '有'
                },
                {
                    id: 1,
                    name: '无'
                }
            ],
            activeIndex: 0
        };
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
        this.callback = this.callback.bind(this);
    }
    hide () {
        this.setState((state) => {
            state.brr = [];
            return state;
        });
    }
    show () {
        this.setState((state) => {
            state.brr = [
                {
                    id: 0,
                    name: '羊肉'
                },
                {
                    id: 1,
                    name: '海鲜'
                },
                {
                    id: 2,
                    name: '芹菜'
                },
                {
                    id: 3,
                    name: '胡萝卜'
                },
                {
                    id: 4,
                    name: '芹菜'
                },
                {
                    id: 5,
                    name: '西红柿'
                },
                {
                    id: 6,
                    name: '白菜'
                },
                {
                    id: 7,
                    name: '土豆'
                }
            ];
            return state;
        });
    }
    callback (data) {
        let {brr} = this.state;
        let newBrr = [];
        if (data) {
            data.forEach(item => {
                newBrr.push(brr[item].name);
            });
            this.props.setallergenic(newBrr);
        }
    }
    render () {
        let { brr, arr, activeIndex } = this.state;
        return (
            <div className='allergenicfood'>
                <Header title='基本信息'></Header>
                <div className="allergenicfood-content">
                    <div className="allergenicfood-sub">
                        <div className="allergenicfood-title">有无过敏食物</div>
                        <div className="check-btn">
                            <SinglePick>
                                {arr.map((item, index) => {
                                    if (activeIndex === index) {
                                        return (
                                            <p key={index} onClick={this.show}><span ></span>{item.name}</p>
                                        );
                                    } else {
                                        return (
                                            <p key={index} onClick={this.hide}><span></span>{item.name}</p>
                                        );
                                    }
                                })}
                            </SinglePick>
                        </div>
                        <div className="allergenicfood-sub-con">
                            <MultiplePick callback={this.callback}>
                                {
                                    brr.map((item, index) => {
                                        return (
                                            <div key={index} id={index.id} className='check-span'>{item.name}</div>
                                        );
                                    })
                                }
                            </MultiplePick>
                        </div>
                    </div>
                </div>
                <button className='allergenicfoodBtn'><NavLink to='/question/dislikefood'>继续</NavLink></button>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        allergenic: state.allergenic
    };
}
function mapDispatchToProps (dispath) {
    return {
        setallergenic: (data) => {
            dispath({
                type: 'update_allergenic',
                data: data
            });
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AllergenicFood);