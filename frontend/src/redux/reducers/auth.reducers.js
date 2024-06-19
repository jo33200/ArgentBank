import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, getUserName, editUsername } from '../actions/auth.actions';

const initialState = {
  isLoggedIn: false,
  user: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.isLoggedIn = false;
        state.token = null;
        state.user = initialState.user;
        state.error = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(getUserName.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = null;
      })
      .addCase(getUserName.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(editUsername.fulfilled, (state, action) => {
        state.user.userName = action.payload;
        state.error = null;
      })
      .addCase(editUsername.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;