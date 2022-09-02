import { createSlice } from "@reduxjs/toolkit";

// AuthSlice for Auth.js, Header.js and UserProfile.js

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// exporting actions and the reducer
export const authActions = authSlice.actions;
export default authSlice.reducer;
