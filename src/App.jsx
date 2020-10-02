import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./container/loginContainer";
import ChatContainer from "./container/chatContainer";
import { ProtectedRoute } from "./helper/protectedRoute";
import { Redirect } from 'react-router-dom';


import WebSocketProvider from "./WebSocket";
import {useSelector} from "react-redux";

function App() {
    const isLogged = useSelector(state => state.user.isLogged);

    return (
        <Router>
            <WebSocketProvider>
            <div>
                <Switch>

                    <ProtectedRoute path='/chat' render={ChatContainer} />
                    {/*<ProtectedRoute exact={true} path='/' component={LoginContainer} />*/}
                    <Route exact={true} path='/'>
                        {isLogged ? <Redirect to="/chat" /> : <LoginContainer/>}
                    </Route>
                </Switch>
            </div>
            </WebSocketProvider>
        </Router>
    );
}

export default App;
