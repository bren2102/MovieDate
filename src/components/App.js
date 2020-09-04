import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Login from './login';
import SideBar from './sidebar';
import LatestMovies from './latestMovies'
import Detail from './detail';
import Appointment from './appointment';

const App = () => (
  <Router>
      <div className="app">
        <SideBar />
        <Switch>
          <Route exact path='/'><Login /></Route>
          <Route exact path='/Movies'><LatestMovies /></Route>
          <Route exact path='/:name'><Detail /></Route>
          <Route exact path='/:name/appointment'><Appointment /></Route>
        </Switch>
      </div>
  </Router>
);
export default App;