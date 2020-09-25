import axios from 'axios';


export const loginDb = (userData) => {
    return axios.post( 'http://localhost:8000/auth', userData);
}

export const login = (user) => {
    // console.log("from api.service ", user)
    return axios.post('http://localhost:8000/auth/google', {user});

}