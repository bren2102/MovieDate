import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom';
import Login from './login';
import SideBar from './sidebar';
import LatestMovies from './latestMovies'
import Detail from './detail';
import TicketAppointment from '../containers/ticketAppointment';

const App = () => (
  <Router>
      <div className="app">
        <SideBar />
        <Switch>
          <Route exact path='/'><Login /></Route>
          <Route exact path='/Movies'><LatestMovies /></Route>
          <Route exact path='/Tickets'><TicketAppointment /></Route>
          <Route exact path='/:name'><Detail /></Route>
        </Switch>
      </div>
  </Router>
);
export default App;