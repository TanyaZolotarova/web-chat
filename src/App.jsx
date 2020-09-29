import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./container/loginContainer";
import ChatContainer from "./container/chatContainer";
import ProtectedRoute from "./helper/protectedRoute";


import WebSocketProvider from "./WebSocket";

function App() {


    return (
        <Router>
            <WebSocketProvider>
            <div>
                <Switch>

                    <Route exact={true} path='/login' component={LoginContainer}/>

                    <Route path='/chat' component={ChatContainer} />

                </Switch>
            </div>
            </WebSocketProvider>
        </Router>
    );
}

export default App;
