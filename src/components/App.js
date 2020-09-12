/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './login';
import SideBar from './sidebar';
import { loginUser } from '../actions/index';
import LatestMovies from './latestMovies';
import Detail from './detail';
import TicketAppointment from '../containers/ticketAppointment';

const App = props => {
  const { currentUser, saveUser } = props;
  const localUser = JSON.parse(localStorage.getItem('user'));
  let loggedIn = false;
  if (currentUser.name ) {
    loggedIn = true;
  }
  if ( !currentUser.name && localUser ) {
    saveUser(localUser)
    loggedIn = true;
  }
  return (
    <Router>
      <div id="app">
        <SideBar />
        <Switch>
          <Route exact path="/"><Login /></Route>
          { loggedIn ? <Route exact path="/Movies"><LatestMovies /></Route> : <Redirect to="/" />}
          { loggedIn ? <Route exact path="/Tickets"><TicketAppointment /></Route> : <Redirect to="/" />}
          { loggedIn ? <Route exact path="/:name"><Detail /></Route> : <Redirect to="/" />}
        </Switch>
      </div>
    </Router>
  );
};

App.propTypes = {
  currentUser: PropTypes.object,
  saveUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  currentUser: '',
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(loginUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
