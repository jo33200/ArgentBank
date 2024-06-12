import axios from "axios";  

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const Logout = () => {
    return dispatch =>{
        dispatch({type: LOGOUT_REQUEST});
        axios.post('http://localhost:3000/api/logout', {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => {
            dispatch({
                type: LOGOUT_SUCCESS,
                payload: response.data.body
            });
        }).catch(error => {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: error.response.data.message
            });
        });

    }
}