import React, { Component, Fragment } from 'react';

class MultiplePick extends Component {
    constructor (props) {
        super(props);
        this.state = {
            arr: ['1', '2', '3'],
            activeIndex: [0, 1]
        };
    }
    pick (index) {
        let {activeIndex} = this.state;
        if (activeIndex.indexOf(index) === -1) {
            this.setState((state) => {
                state.activeIndex.push(index);
                this.props.callback(state.activeIndex);
                return state;
            });
        } else {
            let ind = activeIndex.indexOf(index);
            this.setState((state) => {
                state.activeIndex.splice(ind, 1);
                this.props.callback(state.activeIndex);
                return state;
            });
        }
    }
    render () {
        let { children } = this.props;
        let { arr, activeIndex } = this.state;
        if (!children) {
            return (
                <Fragment>
                    {arr.map((value, index) => {
                        if (activeIndex.indexOf(index)) {
                            return (<span className='active' key={index} onClick={() => { return this.pick(index); }}>{value}</span>);
                        } else {
                            return (<span key={index} onClick={() => { return this.pick(index); }}>{value}</span>);
                        }
                    })}
                </Fragment>
            );
        } else {
            return (
                <Fragment>
                    {React.Children.map(children, (item, index) => {
                        if (activeIndex.indexOf(index) !== -1) {
                            return (<span className='active' key={index} onClick={() => { return this.pick(index); }}>{item}</span>);
                        } else {
                            return (<span key={index} onClick={() => { return this.pick(index); }}>{item}</span>);
                        }
                    })}
                </Fragment>
            );
        }
    }
}
export default MultiplePick;