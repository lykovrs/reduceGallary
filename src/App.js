
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {

  render() {

    const { name, surname, age } = this.props.user
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{name} {surname}</h2>
        </div>
        <p className="App-intro">
          
          <p>Тебе уже {age} ?</p>
        </p>
      </div>
    );
  }


}
function mapStateToProps(state) {
  return {
    user: state
  }
}

export default connect(mapStateToProps)(App)
