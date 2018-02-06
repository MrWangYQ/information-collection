import React, { Component, Fragment } from 'react';

class SinglePick extends Component {
    constructor (props) {
        super(props);
        this.state = {
            arr: ['1', '2', '3'],
            activeIndex: 0
        };
    }
    pick (index) {
        this.props.callback(index);
        this.setState((state) => {
            state.activeIndex = index;
            return state;
        });
    }
    render () {
        let { children } = this.props;
        let { arr, activeIndex } = this.state;
        if (!children) {
            return (
                <Fragment>
                    {arr.map((value, index) => {
                        if (activeIndex === index) {
                            return (<span className='clicked' style={{padding: '10px'}} key={index} onClick={() => { return this.pick(index); }}>{value}</span>);
                        } else {
                            return (<span style={{padding: '10px'}} key={index} onClick={() => { return this.pick(index); }}>{value}</span>);
                        }
                    })}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    {React.Children.map(children, (item, index) => {
                        if (activeIndex === index) {
                            return (<span className='clicked' style={{padding: '10px'}} key={index} onClick={() => { return this.pick(index); }}>{item}</span>);
                        } else {
                            return (<span style={{padding: '10px'}} key={index} onClick={() => { return this.pick(index); }}>{item}</span>);
                        }
                    })}
                </Fragment>
            );
        }
    }
}
export default SinglePick;