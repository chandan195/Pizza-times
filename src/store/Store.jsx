import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./CardSlice";

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
});

export default store;
