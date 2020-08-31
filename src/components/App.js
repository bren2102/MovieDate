import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Login from './login';
import SideBar from './sidebar';
import Movies from './movies'

const App = () => (
  <Router>
    
      <div className="app">
        {/* <Route exact path='/'><Login /></Route> */}
        <SideBar />
        <Switch>
          <Route exact path='/MovieList'><Movies /></Route>
        </Switch>
      </div>
  </Router>
);
export default App;