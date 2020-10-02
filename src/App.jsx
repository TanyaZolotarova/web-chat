import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./container/loginContainer";
import ChatContainer from "./container/chatContainer";
import ProtectedRoute from "./helper/protectedRoute";
import { Redirect } from 'react-router-dom';


import WebSocketProvider from "./WebSocket";

function App() {


    return (
        <Router>
            <WebSocketProvider>
            <div>
                <Switch>

                    <ProtectedRoute path='/chat' component={ChatContainer}/>
                    {/*<ProtectedRoute exact={true} path='/' component={LoginContainer} />*/}
                    <Route exact={true} path='/'>
                        {localStorage.getItem('token') ? <Redirect to="/chat" /> : <LoginContainer/>}
                    </Route>
                </Switch>
            </div>
            </WebSocketProvider>
        </Router>
    );
}

export default App;
