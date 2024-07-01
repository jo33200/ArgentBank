import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getUserName, editUsername } from '../actions/auth.actions';

const initialState = {
  isLoggedIn: false,               // Indicateur de statut de connexion
  user: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  token: null,                     // Token d'authentification
  error: null,                     // Gestion des erreurs
};

const authSlice = createSlice({
  name: 'auth',                    // Nom du slice (utilisé pour identifier cet état dans le store Redux)
  initialState,                    // État initial défini ci-dessus
  reducers: {},                    // Les reducers "extra" sont gérés via `extraReducers` ci-dessous
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;   // Marque l'utilisateur comme connecté
        state.token = action.payload; // Stocke le token d'authentification dans l'état
        state.error = null;         // Réinitialise toute erreur précédente
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload; // Gère les erreurs lors de la connexion
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;  // Marque l'utilisateur comme déconnecté
        state.token = null;        // Supprime le token d'authentification
        state.user = initialState.user; // Réinitialise les données utilisateur
        state.error = null;        // Réinitialise toute erreur précédente
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload; // Gère les erreurs lors de la déconnexion
      })
      .addCase(getUserName.fulfilled, (state, action) => {
        state.user = action.payload; // Met à jour les informations utilisateur avec les données reçues
        state.error = null;         // Réinitialise toute erreur précédente
      })
      .addCase(getUserName.rejected, (state, action) => {
        state.error = action.payload; // Gère les erreurs lors de la récupération des informations utilisateur
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.user.userName = action.payload; // Met à jour le nom d'utilisateur avec la valeur reçue
        state.error = null;         // Réinitialise toute erreur précédente
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.error = action.payload; // Gère les erreurs lors de la mise à jour du nom d'utilisateur
      });
  },
});

export default authSlice.reducer; // Exporte le reducer prêt à être utilisé dans le store Redux