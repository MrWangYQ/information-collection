import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';
import './dislikefood.css';
import Header from '../../components/head/header';
import MultiplePick from '../multiplePick/multiplePick';
import SinglePick from '../singlePick/singlePick';
import { connect } from 'react-redux';
class DislikeFood extends Component {
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
            // console.log(newBrr);
            this.props.setDislike(newBrr);
        }
    }
    render () {
        let { brr, arr, activeIndex } = this.state;
        return (
            <div className='dislikefood'>
                <Header title='基本信息'></Header>
                <div className="dislikefood-content">
                    <div className="dislikefood-sub">
                        <div className="dislikefood-title">不喜欢吃的食物</div>
                        <div className="dislikefood-sub-con">
                            <MultiplePick callback={this.callback}>
                                {
                                    brr.map((item, index) => {
                                        return (
                                            <div key={index} id={index.id} className='check-span'><span></span>{item.name}</div>
                                        );
                                    })
                                }
                            </MultiplePick>
                        </div>
                    </div>
                </div>
                <button className='dislikefoodBtn'><NavLink to='/question/feel'>继续</NavLink></button>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        Dislike: state.Dislike
    };
}
function mapDispatchToProps (dispath) {
    return {
        setDislike: (data) => {
            dispath({
                type: 'update_Dislike',
                data: data
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DislikeFood);