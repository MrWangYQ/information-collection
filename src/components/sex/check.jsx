import React, { Component } from 'react';
class Check extends Component {
    constructor () {
        super();
        this.checkedMan = this.checkedMan.bind(this);
        this.checkedWoman = this.checkedWoman.bind(this);
    }
    checkedMan () {
        let { switchBtn } = this.props;
        if (switchBtn) {
            this.props.open(!switchBtn);
            this.refs.woman.className = '';
            this.refs.man.className = 'active';
        } else {
            this.props.open(!switchBtn);
        }
    }
    checkedWoman () {
        let { switchBtn } = this.props;
        if (!switchBtn) {
            this.props.open(!switchBtn);
            this.refs.man.className = '';
            this.refs.woman.className = 'active';
        } else {
            this.props.open(!switchBtn);
        }
    }
    render () {
        return (
            <div className="sex-check">
                <div className='check sex-man'>
                    <p>我是男神</p>
                    <span onClick={this.checkedMan} ref='man' name='man'></span>
                </div>
                <div className='check sex-woman'>
                    <p>我是女神</p>
                    <span onClick={this.checkedWoman} ref='woman' name='woman'></span>
                </div>
            </div>
        );
    }
}
export default Check;