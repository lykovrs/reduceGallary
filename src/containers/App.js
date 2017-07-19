
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import logo from './../logo.svg';
import './../App.css';
import { connect } from 'react-redux';
import User from './../components/User';
import Page from './../components/Page';
import * as pageActions from '../actions/PageActions';

class App extends Component {

  render() {

    const { user, page } = this.props;
    const { setYear } = this.props.pageActions;

    return (
      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <User name={user.name} />
        </div>
        <Page photos={page.photos} year={page.year} setYear={setYear} />
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

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
