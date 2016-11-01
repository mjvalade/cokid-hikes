import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions/auth';

export class SignIn extends Component {
  render() {
    const { status, username, logIn, logOut } = this.props;

    if (status === 'LOGGED_IN') {
      return (
        <section className="AuthWindow">
          <p className="User">Logged in as {username}</p>
          <button onClick={e => logOut()}>Log Out</button>
        </section>
      );
    } else {
      return (
        <section className="AuthWindow">
          <p className="User">Please log in.</p>
          <button
            disabled={(status === 'AWATING_AUTH_RESPONSE')}
            onClick={e => logIn()}
          >Log In</button>
        </section>
      );
    }
  }
}

const mapStateToProps = (state) => state.auth;

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
