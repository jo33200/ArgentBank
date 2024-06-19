import axios from "axios";  
// Importez d'abord cette méthode

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const Logout = () => {
    return dispatch => {
        dispatch({ type: LOGOUT_REQUEST });

        axios.post('http://localhost:3000/api/logout', {}, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            // Supprimer le token du localStorage ici
            localStorage.removeItem('authToken');

            dispatch({
                type: LOGOUT_SUCCESS,
                payload: response.data.body // Assurez-vous que response.data.body contient les données nécessaires
            });
        })
        .catch(error => {
            dispatch({
                type: LOGOUT_FAILURE,
                payload: error.response.data.message // Assurez-vous que error.response.data.message contient le message d'erreur approprié
            });
        });
    }
}