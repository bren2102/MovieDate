import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Login from './login';
import SideBar from './sidebar';
import LatestMovies from './latestMovies'

const App = () => (
  <Router>
    
      <div className="app">
        {/* <Route exact path='/'><Login /></Route> */}
        <SideBar />
        <Switch>
          <Route exact path='/MovieList'><LatestMovies /></Route>
        </Switch>
      </div>
  </Router>
);
export default App;