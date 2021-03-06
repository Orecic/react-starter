/**
 * @file App.js
 * @author Orecic
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store, { updateAsyncReducers, history } from './store';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.unsubscribe = store.subscribe(() => {});

        // 监听路由变化
        // history.listen(location => {
        //     console.log(location.pathname)
        // });

        // 动态更新 reducers
        updateAsyncReducers(store, this.props.asyncReducers);
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    {this.props.children}
                </Router>
            </Provider>
        );
    }
}

App.propTypes = {
    children: PropTypes.node.isRequired,
    asyncReducers: ImmutablePropTypes.map,
}
