
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import loginReducer from '../login/loginReducer';
import logoutReducer from '../logout/logoutReducer';
import userReducer from '../user/userReducer';

const store = configureStore({
    reducer: {
      login: loginReducer,
      logout: logoutReducer,
      user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // Désactive la vérification par défaut pour les objets non sérialisables
      }),
    devTools: process.env.NODE_ENV !== 'production' ? composeWithDevTools() : false,
  });
  
  export default store;