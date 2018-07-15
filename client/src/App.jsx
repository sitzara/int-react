import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'


export class App extends Component {
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
            <div className={'app'}>
                {children}
            </div>
        );
    }
}

export default withRouter(App);