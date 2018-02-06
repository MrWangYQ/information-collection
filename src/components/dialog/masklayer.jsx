import React, {Component} from 'react';

class Masklayer extends Component {
    render () {
        return (
            <div className='MaskBase'>{this.props.children}</div>
        );
    }
}

export default Masklayer;