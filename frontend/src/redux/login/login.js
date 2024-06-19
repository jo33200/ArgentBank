import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const Login = (credentials) => {
    return dispatch =>{
        dispatch({type: LOGIN_REQUEST});
        axios.post('http://localhost:3001/api/v1/user/login', credentials,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            const token = response.data.body.token;
            localStorage.setItem('authToken', token);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: {
                    token: token,
                    user: response.data.body.user
                }
            });
        }).catch(error => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response.data.message
            });
        });
    }
};