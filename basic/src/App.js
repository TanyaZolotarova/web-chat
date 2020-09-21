import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Login from "./authorization/Login";
import Chat from "./chat/chat";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact={true} path='/login' component={Login}/>
                  <Route exact={true} path='/' component={Chat}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
