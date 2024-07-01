// auth.actions.js
import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  'user/logIn', // Type de l'action (utilisé pour identifier l'action dans le magasin Redux)
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    // Fonction asynchrone qui sera exécutée lorsqu'on déclenchera l'action `logIn`
    try {
      // Tentative d'envoi de la requête de connexion au serveur
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', // Méthode HTTP utilisée (POST dans ce cas pour envoyer des données)
        headers: {
          'Content-Type': 'application/json', // Type de contenu de la requête (JSON)
        },
        body: JSON.stringify({ email, password }), // Corps de la requête, contenant email et password
      });

      // Vérification de la réponse du serveur
      if (!response.ok) { // Si la réponse du serveur n'est pas OK (status code non 2xx)
        console.log('Response is not OK:', response);
        throw new Error('Invalid email or password'); // Lancer une erreur pour indiquer une erreur d'authentification
      }

      // Si la réponse du serveur est OK, on continue en récupérant les données JSON de la réponse
      const data = await response.json(); // Conversion de la réponse en JSON
      const token = data.body.token; // Extraction du token reçu du serveur

      // Stockage du token dans sessionStorage
      sessionStorage.setItem('token', token);

      // Si l'utilisateur a coché "Se souvenir de moi", stocker le token également dans localStorage
      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      // Retourner les données reçues du serveur (par exemple, des informations sur l'utilisateur connecté)
      return data;
    } catch (error) {
      // En cas d'erreur lors de la tentative de connexion
      console.error('Error:', error);
      return rejectWithValue(error.message); // Rejeter la promesse avec un message d'erreur
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut', // Type de l'action (utilisé pour identifier l'action dans le magasin Redux)
  async (_, { rejectWithValue }) => {
    // Fonction asynchrone qui sera exécutée lorsqu'on déclenchera l'action `logOut`
    try {
      localStorage.removeItem('token'); // Supprime le token de localStorage
      sessionStorage.removeItem('token'); // Supprime le token de sessionStorage

      return null; // Retourne null pour indiquer que la déconnexion a réussi
    } catch (error) {
      return rejectWithValue(error.message); // Rejette la promesse avec un message d'erreur en cas d'échec
    }
  }
);

export const getUserName = createAsyncThunk(
  'user/getUserName', // Type de l'action
  async (_, { rejectWithValue }) => {
    // Fonction asynchrone qui sera exécutée lorsqu'on déclenchera l'action `getUserName`
    try {
      // Requête pour obtenir le profil de l'utilisateur
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', // Méthode HTTP utilisée (dans cet exemple, POST est utilisé, mais cela dépend de votre API)
        headers: {
          'Content-Type': 'application/json', // Type de contenu de la requête (JSON)
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Ajout du token d'authentification dans les headers
        },
      });

      // Vérification de la réponse du serveur
      if (!response.ok) {
        throw new Error(`Failed to fetch profile, status: ${response.status}`);
      }

      // Extraction des données JSON de la réponse
      const data = await response.json();

      // Vérification de la validité des données du profil
      if (!data || !data.body) {
        throw new Error('Invalid profile data');
      }

      // Retourne les données du profil (par exemple, le nom d'utilisateur)
      return data.body;
    } catch (error) {
      // En cas d'erreur lors de la récupération du nom d'utilisateur
      return rejectWithValue(error.message); // Rejette la promesse avec un message d'erreur
    }
  }
);
  

export const editUsername = createAsyncThunk(
  'user/updateUserName', // Type de l'action (utilisé pour identifier l'action dans le magasin Redux)
  async (userName, { rejectWithValue }) => {
    // Fonction asynchrone qui sera exécutée lorsqu'on déclenchera l'action `editUsername`
    try {
      // Requête pour mettre à jour le nom d'utilisateur
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT', // Méthode HTTP utilisée (dans cet exemple, PUT est utilisé, mais cela dépend de votre API)
        headers: {
          'Content-Type': 'application/json', // Type de contenu de la requête (JSON)
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, // Ajout du token d'authentification dans les headers
        },
        body: JSON.stringify({ userName }), // Corps de la requête, contenant le nouveau nom d'utilisateur
      });

      // Vérification de la réponse du serveur
      if (!response.ok) {
        throw new Error('Failed to update user name');
      }

      // Extraction des données JSON de la réponse
      const data = await response.json();

      // Retourne le nouveau nom d'utilisateur mis à jour (si nécessaire)
      return data.body.userName;
    } catch (error) {
      // En cas d'erreur lors de la mise à jour du nom d'utilisateur
      return rejectWithValue(error.message); // Rejette la promesse avec un message d'erreur
    }
  }
);