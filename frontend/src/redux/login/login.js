import axios from "axios";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const Login = (credentials) => {
    return dispatch =>{
        dispatch({type: LOGIN_REQUEST});
        axios.post('http://localhost:3000/api/login', credentials,{
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            //const token = response.data.body.token;
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data.body
            });
        }).catch(error => { console.log("erreur de login:", error.response.data.message)
            dispatch({
                type: LOGIN_FAILURE,
                payload: error.response.data.message
            });
        });

    }
}