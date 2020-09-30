import React from 'react'
import { Redirect } from 'react-router-dom'


class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;

        return localStorage.getItem('token') ?
            <Component />
         :
            <Redirect to={{ pathname: '/' }} /> ;
    }
}

export default ProtectedRoute;
