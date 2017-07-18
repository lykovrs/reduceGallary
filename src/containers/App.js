
import React, { Component } from 'react';
import logo from './../logo.svg';
import './../App.css';
import { connect } from 'react-redux';
import User from './../components/User';
import Page from './../components/Page';

class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {

    const { name } = this.props.user;
    const { year, photos } = this.props.page
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User name={name} />
        </div>
        <Page photos={photos} year={year} />
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
