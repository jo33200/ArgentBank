import { createAsyncThunk } from '@reduxjs/toolkit';

export const logIn = createAsyncThunk(
  'user/logIn', 
  async ({ email, password, rememberMe }, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify({ email, password }), 
      });

      if (!response.ok) { 
        console.log('Response is not OK:', response);
        return rejectWithValue('Invalid email or password'); 
      }

      const data = await response.json();
      const token = data.body.token;

      sessionStorage.setItem('token', token);

      if (rememberMe) {
        localStorage.setItem('token', token);
      }

      return data;
    } catch (error) {
      console.error('Error:', error);
      return rejectWithValue(error.message); 
    }
  }
);

export const logOut = createAsyncThunk(
  'user/logOut', 
  async (_, { rejectWithValue }) => {
    
    try {
      localStorage.removeItem('token'); 
      sessionStorage.removeItem('token'); 

      return null; 
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);

export const getUserName = createAsyncThunk(
  'user/getUserName', 
  async (_, { rejectWithValue }) => {
    try {
      
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, 
        },
      });

      if (!response.ok) {
        return rejectWithValue(`Failed to fetch profile, status: ${response.status}`);
      }

      const data = await response.json();

      if (!data || !data.body) {
        return rejectWithValue('Invalid profile data');
      }

      return data.body;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);
  

export const editUsername = createAsyncThunk(
  'user/updateUserName', 
  async (userName, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${sessionStorage.getItem('token')}`, 
        },
        body: JSON.stringify({ userName }), 
      });

      if (!response.ok) {
        return rejectWithValue('Failed to update user name');
      }

      const data = await response.json();

      return data.body.userName;
    } catch (error) {
      return rejectWithValue(error.message); 
    }
  }
);