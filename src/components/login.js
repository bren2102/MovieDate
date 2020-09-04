import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom';
import { loginUser } from '../actions/index'
import { Icon } from '@iconify/react';
import bxChevronRightCircle from '@iconify/icons-bx/bx-chevron-right-circle';

class Login extends React.Component {
  state = {
    usernameInput: '',
  }

  handleChange = event => {
    this.setState({
      usernameInput: event.target.value,
    })
    console.log(event.target.value)
  }

  handleSubmit = () => {
    const { saveUser } = this.props;
    saveUser(this.state.usernameInput);
  }

  render() {
    const { usernameInput } = this.state;
    console.log(usernameInput);
    return(
      <div id="login">
        <h1>THE NEW MOVIE DATE</h1>
        <div>
          <input type="text" value={usernameInput} onChange={this.handleChange}></input>
          <Link to={'/Movies'}>
            <button type="button" onSubmit={this.handleSubmit}>
              Log in
                <Icon icon={bxChevronRightCircle} style={{ color: 'white', fontSize: '20px', marginLeft: '10px', }} />
            </button>
          </Link>
        </div>
      </div>
      )
  }
}

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(loginUser(user)),
})

export default connect(null, mapDispatchToProps)(withRouter(Login));