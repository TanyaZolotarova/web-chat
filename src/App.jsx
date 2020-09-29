import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import LoginContainer from "./container/loginContainer";
import ChatContainer from "./container/chatContainer";
import Redirect from "react-router-dom/es/Redirect";
import ProtectedRoute from "./helper/protectedRoute";


function App() {


    return (
        <Router>
            <div>
                <Switch>
                    {/*<Route exact={true}  path='/login' component={LoginContainer}/>*/}

                    {/*<Route exact={true}  path='/chat' component={ChatContainer}/>*/}
                    {/*<Route exact={true} path='/'>*/}
                    {/*    {window.localStorage.getItem('token') ? <Redirect to="/chat" /> : <LoginContainer />}*/}
                    {/*</Route>*/}

                    <Route exact={true} path='/login' component={LoginContainer}/>

                    <ProtectedRoute path='/chat' component={ChatContainer} />



                </Switch>
            </div>
        </Router>
    );
}

export default App;
