// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {
    constructor(props) {
        super(props)
    }

    static PropTypes = {
        photos: PropTypes.array.isRquired,
        year: PropTypes.number.isRquired
    }

    render() {
        const {photos, year} = this.props;

        return (
            <div className="App-intro">

                <p>У тебя {photos.length} фото за {year} год</p>
            </div>
        )
    }
}
