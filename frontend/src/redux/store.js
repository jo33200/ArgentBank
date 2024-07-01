import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Utilise localStorage pour le web
import authSlice from './reducers/auth.reducers'; // Importation du slice d'authentification

// Configuration pour Redux Persist
const persistConfig = {
  key: 'root', // Clé pour le stockage persistant, ici 'root' indique le niveau racine de l'état
  storage, // Utilise localStorage pour stocker l'état
};

// Création d'un réducteur persistant en enveloppant authSlice avec persistReducer
const persistedReducer = persistReducer(persistConfig, authSlice);

// Configuration du magasin Redux avec Redux Toolkit
export const store = configureStore({
  reducer: {
    auth: persistedReducer, // Ajout du réducteur persistant à la configuration du magasin
  },
  // Personnalisation des middleware par défaut pour désactiver la vérification de la sérialisation
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

// Création d'un persistor lié au magasin Redux
export const persistor = persistStore(store);