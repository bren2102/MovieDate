/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Icon } from '@iconify/react';
import bxChevronRightCircle from '@iconify/icons-bx/bx-chevron-right-circle';
import PropTypes from 'prop-types';
import axios from 'axios';
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
    const { saveUser, history } = this.props;
    const { usernameInput } = this.state;
    // saveUser(usernameInput);
    // localStorage.setItem('username', usernameInput);
    axios.post('api/user/login', {
      name: usernameInput,
    }).then(data => {
      saveUser(data.data);
      localStorage.setItem('user', JSON.stringify(data.data));
      // console.log(data.data);
      // console.log(localStorage.getItem('username'));
      history.push('/Movies');
    });
  }

  render() {
    const { usernameInput } = this.state;
    return (
      <div id="login">
        <h1>THE NEW MOVIE DATE</h1>
        <div>
          <input type="text" placeholder="Your name here" value={usernameInput} onChange={this.handleChange} />
          <button type="button" onClick={this.handleSubmit}>
            Log in
            <Icon icon={bxChevronRightCircle} style={{ color: 'white', fontSize: '20px', marginLeft: '10px', }} />
          </button>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(loginUser(user)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
