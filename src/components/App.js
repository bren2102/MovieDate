import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import Login from './login';
import SideBar from './sidebar';

const App = () => (
  <Router>
    <Switch>
      <div className="app">
        <Route exact path='/'><Login /></Route>
      <Route exact path='/Movies'><SideBar /></Route>
      </div>
    </Switch>
  </Router>
);
export default App;