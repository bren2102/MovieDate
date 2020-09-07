import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux'
import Login from './login';
import SideBar from './sidebar';
import { loginUser } from '../actions/index'
import LatestMovies from './latestMovies';
import Detail from './detail';
import TicketAppointment from '../containers/ticketAppointment';

const App = (props) => {
  let { currentUser, saveUser } = props;
  currentUser = saveUser(localStorage.getItem('username'));
  return(
    <Router>
        <div className="app">
          <SideBar />
          <Switch>
            <Route exact path='/'><Login /></Route>
          { localStorage.getItem('username')? <Route exact path='/Movies'><LatestMovies /></Route> : <Redirect to='/' />}
          { localStorage.getItem('username')? <Route exact path='/Tickets'><TicketAppointment /></Route> : <Redirect to='/' />}
          { localStorage.getItem('username')? <Route exact path='/:name'><Detail /></Route> : <Redirect to='/' />}
          </Switch>
        </div>
    </Router>
    )
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
})

const mapDispatchToProps = dispatch => ({
  saveUser: user => dispatch(loginUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);