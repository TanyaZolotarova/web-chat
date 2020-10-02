import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const ProtectedRoute = ({render: Component}) => {
    const isLogged = useSelector(state => state.user.isLogged);
    return isLogged
        ? <Component/>
        : <Redirect to={{pathname: '/'}}/>;
}
