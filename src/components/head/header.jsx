import React, { Component, Fragment } from 'react';
import './head.css';
class Header extends Component {
    render () {
        let { icon, title } = this.props;
        return (
            <div className='header'>
                <i className={icon}></i>
                <p>{title}</p>
            </div>
        );
    }
}

export default Header;