/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxChevronRightCircle from '@iconify/icons-bx/bx-chevron-right-circle';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/index';

class Login extends React.Component {
  state = {
    usernameInput: '',
  }

  handleChange = event => {
    this.setState({
      usernameInput: event.target.value,
    });
  }

  handleSubmit = () => {
    const { saveUser } = this.props;
    const { usernameInput } = this.state;
    saveUser(usernameInput);
    localStorage.setItem('username', usernameInput);
  }

  render() {
    const { usernameInput } = this.state;
    return (
      <div id="login">
        <h1>THE NEW MOVIE DATE</h1>
        <div>
          <input type="text" placeholder="Your name here" value={usernameInput} onChange={this.handleChange} />
          <Link to="/Movies">
            <button type="button" onClick={this.handleSubmit}>
              Log in
              <Icon icon={bxChevronRightCircle} style={{ color: 'white', fontSize: '20px', marginLeft: '10px' }} />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
