import React, {Component} from 'react';
class Button extends Component {
    constructor () {
        super();
        this.close = this.close.bind(this);
    }
    close () {
        this.props.onclose();
    }
    render () {
        return (
            <button className='Button' onClick={this.close}>{this.props.children}</button>
        );
    }
}
export default Button;