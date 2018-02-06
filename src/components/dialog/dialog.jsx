import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Masklayer from './masklayer';
import Title from './title.jsx';
import Content from './content';
import Buttons from './buttons';
import Button from './button';
import './dialog.css';
class DialogBase extends Component {
    constructor () {
        super();
        this.state = {
            isShow: false
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.certain = this.certain.bind(this);
    }
    open () {
        this.setState(state => {
            state.isShow = true;
            return state;
        });
    }
    close () {
        this.setState(state => {
            state.isShow = false;
            return state;
        });
    }
    certain () {
        this.close();
        this.props.callback();
    }
    render () {
        return (this.state.isShow && <div className={'dialogBox ' + this.props.active}>
            <Masklayer>
                <Title><span><Button onclose={this.close}>X</Button></span></Title>
                <Content>{this.props.children}</Content>
                <Buttons>
                    <Button onclose={this.certain}>确认</Button>
                </Buttons>
            </Masklayer>
        </div>);
    }
}

export default DialogBase;
console.assert(PropTypes);
DialogBase.propTypes = {
    callback: PropTypes.func.isRequired
};