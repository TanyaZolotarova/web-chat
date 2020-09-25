import axios from 'axios';

export const login = (user) => {
    // console.log("from api.service ", user)
    return axios.post('http://localhost:8000/auth/google', {user});

}