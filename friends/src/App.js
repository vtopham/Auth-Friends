import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import Friends from './components/Friends'
import Login from './components/Login'

import styled from 'styled-components'

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    background: #f8bdff;

    span {
      margin: 2%;
      padding: 1% 2%;
      border-radius: 5px;
      background: #85beff;
      // border: 1px solid #f8bdff;
      

      &:hover {
        font-weight: bold;
      }
      
      * {
        text-decoration: none;
        color: white;// 
        
        
      }
    }
  }

`

function App() {
  return (
    <>
    <Router>
      <AppDiv>
        <nav>
          <span>
            <Link to = "/login">Login</Link>
          </span>
          <span>
            <Link to = "/friends">Friends</Link>
          </span>
        </nav>
        <Switch>
          <PrivateRoute exact path = "/friends" component = {Friends} />
          <Route path = "/login" component = {Login} />
          <Route component = {Login} />
        </Switch>
      </AppDiv>
    </Router>
    </>
  );
}

export default App;
