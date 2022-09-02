import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// configuring the store
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// exporting actions and the store

export default store;
