import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import Login from './components/Login'


function App() {
  return (
    <>
    <Router>
      <div className = "App">
        <ul>
          <li>
            <Link to = "/login">Login</Link>
          </li>
          <li>
            <Link to = "/friends">Friends</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path = "/friends" component = {Friends} />
          <Route path = "/login" component = {Login} />
          <Route component = {Login} />
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
