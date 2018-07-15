import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
// import './styles';


export default class TaskOne extends Component {
    static propTypes = {
        // children: PropTypes.oneOfType([
        //     PropTypes.element,
        //     PropTypes.arrayOf(PropTypes.element),
        // ]),
    };

    // static defaultProps = {
    //     children: null,
    // };

    render() {
        const { children } = this.props;

        return (
            <div className={'task-1'}>
                {'task one'}
            </div>
        );
    }
}
