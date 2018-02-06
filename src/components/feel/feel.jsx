import React, { Component, Fragment } from 'react';
import './feel.css';
import Header from '../../components/head/header';
import MultiplePick from '../multiplePick/multiplePick';
import SinglePick from '../singlePick/singlePick';
import {connect} from 'react-redux';
class Feel extends Component {
    constructor () {
        super();
        this.state = {
            feelData: [
                {
                    src: 'icon iconfont icon-fangkuaiyi',
                    title: '您的皮肤一抓就红，并出现抓痕吗?',
                    choice: ['没有', '很少', '有时', '经常', '总是']
                },
                {
                    src: 'icon iconfont icon-fangkuaiyi',
                    title: '您平时痰多特别是咽喉部总感觉有痰堵着吗?',
                    choice: ['没有', '很少', '有时', '经常', '总是']
                },
                {
                    src: 'icon iconfont icon-fangkuaiyi',
                    title: '您吃（喝）凉的东西会感觉不舒服或者怕吃（喝）凉的东西吗?',
                    choice: ['没有', '很少', '有时', '经常', '总是']
                },
                {
                    src: 'icon iconfont icon-fangkuaiyi',
                    title: '您的皮肤一抓就红，并出现抓痕吗?',
                    choice: ['没有', '很少', '有时', '经常', '总是']
                },
                {
                    src: 'icon iconfont icon-fangkuaiyi',
                    title: '您平时痰多特别是咽喉部总感觉有痰堵着吗?',
                    choice: ['没有', '很少', '有时', '经常', '总是']
                }
            ],
            activeIndex: [0],
            newFeelData: []
        };
        this.choice = this.choice.bind(this);
        this.pick = this.pick.bind(this);
    }
    choice (index, idx) {
        console.log(index, idx);
        let {feelData, activeIndex, newFeelData} = this.state;
        let newActiveIndex = [];
        console.log(activeIndex.indexOf(index));
        if (activeIndex.indexOf(index) === -1) {
            if (newFeelData.indexOf(feelData[index].choice[idx]) === -1) {
                this.setState((state) => {
                    state.activeIndex.push(index);
                    // this.props.setfeel(state.activeIndex);
                    return state;
                });
            }
        } else {
            let ind = activeIndex.indexOf(index);
            this.setState((state) => {
                state.activeIndex.splice(ind, 1);
                // this.props.callback(state.activeIndex);
                return state;
            });
        }
        // if (newFeelData.indexOf(feelData[index].choice[idx]) === -1) {
        //     newFeelData.push(feelData[index].choice[idx]);
        // } else {
        //     newFeelData.splice(feelData[index].choice[idx], 1);
        // }
        console.log(activeIndex, 'newFeelData');
        // if (activeIndex.indexOf(index) === -1) {
        //     this.setState((state) => {
        //         state.activeIndex.push(index);
        //         this.props.setfeel(state.activeIndex);
        //         return state;
        //     });
        // } else {
        //     let ind = activeIndex.indexOf(index);
        //     this.setState((state) => {
        //         state.activeIndex.splice(ind, 1);
        //         this.props.callback(state.activeIndex);
        //         return state;
        //     });
        // }
        // this.props.setfeel(feelData[index].choice[idx]);
    }
    pick (idx) {
        // console.log(idx);
        // this.props.setfeel('');
    }
    render () {
        let { feelData } = this.state;
        return (
            <div className='feel'>
                <Header title='您感觉?'></Header>
                <div className="feel-content">
                    <div className="feel-sub-content">
                        {
                            feelData.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className='feel-sub-title'><i className={item.src}></i>{item.title}</div>
                                        <div className='feel-choice'>
                                            <SinglePick callback={this.pick}>
                                                {
                                                    item.choice.map((value, idx) => {
                                                        return (
                                                            <span key={idx} onClick={() => { return this.choice(index, idx); }}>{value}</span>
                                                        );
                                                    })
                                                }
                                            </SinglePick>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        feel: state.feel
    };
}
function mapDispatchToProps (dispath) {
    return {
        setfeel: (data) => {
            dispath({
                type: 'update_feel',
                data: data
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Feel);