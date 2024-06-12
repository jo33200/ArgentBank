import { configureStore } from '@reduxjs/toolkit';
import { loginReducer } from '../login/loginReducer';
import { logoutReducer } from '../logout/logoutReducer';

const store = configureStore({
    reducer:{
        userLogin: loginReducer,
        userLogout: logoutReducer
    }
});

export default store;