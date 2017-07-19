// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class User extends Component {

    static PropTypes = {
        name: PropTypes.string.isRquired
    }

    render() {
        const name = this.props.name;

        return (
            <div>
                <h2>Привет, {name}!</h2>
            </div>
        )
    }
}
