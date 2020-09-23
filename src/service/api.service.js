import axios from 'axios';

export const login = (username) => {
    return axios.post('http://localhost:8000/users/google', {username});
}