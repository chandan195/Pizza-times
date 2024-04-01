import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";
import googleReducer from "./GoogleLogInSlice";
const store = configureStore({
  reducer: {
    login:googleReducer,
    card: cardReducer,
  },
});

export default store;
