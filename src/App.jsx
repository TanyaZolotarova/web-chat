import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./container/loginContainer";
import ChatContainer from "./container/chatContainer";

function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact={true}  path='/login' component={LoginContainer}/>
                  <Route exact={true}  path='/' component={ChatContainer}/>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
