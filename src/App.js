
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  render() {

    const { name } = this.props.user;
    const { year, photos } = this.props.page
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Привет, {name}!</h2>
        </div>
        <p className="App-intro">
          
          <p>У тебя {photos.length} фото за {year} год</p>
        </p>
      </div>
    );
  }


}
function mapStateToProps(state) {
  return {
    user: state.user,
    page: state.page
  }
}

export default connect(mapStateToProps)(App)
