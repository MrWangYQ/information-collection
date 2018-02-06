import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './history.css';
import Header from '../../components/head/header';
import MultiplePick from '../multiplePick/multiplePick';
import SinglePick from '../singlePick/singlePick';
import { connect } from 'react-redux';
class HistoryMedical extends Component {
    constructor () {
        super();
        this.state = {
            brr: [
                {
                    id: 0,
                    name: '心脏病'
                },
                {
                    id: 1,
                    name: '心脏病'
                },
                {
                    id: 2,
                    name: '心脏病'
                },
                {
                    id: 3,
                    name: '心脏病'
                },
                {
                    id: 4,
                    name: '心脏病'
                },
                {
                    id: 5,
                    name: '心脏病'
                },
                {
                    id: 6,
                    name: '心脏病'
                },
                {
                    id: 7,
                    name: '心脏病'
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
    callback (data) {
        let {brr} = this.state;
        let newBrr = [];
        if (data) {
            data.forEach(item => {
                newBrr.push(brr[item].name);
            });
            this.props.setIllness(newBrr);
        }
    }
    show () {
        this.setState((state) => {
            state.brr = [
                {
                    id: 0,
                    name: '心脏病'
                },
                {
                    id: 1,
                    name: '心脏病'
                },
                {
                    id: 2,
                    name: '心脏病'
                },
                {
                    id: 3,
                    name: '心脏病'
                },
                {
                    id: 4,
                    name: '心脏病'
                },
                {
                    id: 5,
                    name: '心脏病'
                },
                {
                    id: 6,
                    name: '心脏病'
                },
                {
                    id: 7,
                    name: '心脏病'
                }
            ];
            return state;
        });
    }
    render () {
        let { brr, arr, activeIndex } = this.state;
        return (
            <div className='history'>
                <Header title='基本信息'></Header>
                <div className="history-content">
                    <div className="history-sub">
                        <div className="history-title">有无病史</div>
                        <div className="check-btn">
                            <SinglePick callback={this.callback}>
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
                        <div className="history-sub-con">
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
                <button className='historyBtn'><NavLink to='/question/allergenicfood'>继续</NavLink></button>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        Illness: state.Illness
    };
}
function mapDispatchToProps (dispath) {
    return {
        setIllness: (data) => {
            dispath({
                type: 'update_Illness',
                data: data
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMedical);