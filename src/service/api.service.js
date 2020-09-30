import axios from 'axios';

export const loginDb = (userData) => {

    return axios.post('http://localhost:8000/auth', userData);
}

export const login = (user) => {

    return axios.post('http://localhost:8000/auth/google', {user});

}

export const updateProfile = (data) => {
    return axios.put(`http://localhost:8000/user/profile/${data.userId}`, data);
}