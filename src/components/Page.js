// eslint-disable-next-line
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Page extends Component {


    static PropTypes = {
        photos: PropTypes.array.isRquired,
        year: PropTypes.number.isRquired,
        setYear: PropTypes.func.isRquired
    }

    onYearBtnClick(e) {
        this.props.setYear(+e.target.innerText)
    }
    constructor(props) {
        super(props);
        this.onYearBtnClick = this.onYearBtnClick.bind(this);
    }
    render() {
        const { photos, year } = this.props;

        return (
            <div className="App-intro">
                <p>
                    <button onClick={this.onYearBtnClick}>2017</button>
                    <button onClick={this.onYearBtnClick}>2016</button>
                    <button onClick={this.onYearBtnClick}>2015</button>
                </p>

                <p>У тебя {photos.length} фото за {year} год</p>
            </div>
        )
    }
}
