import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const googleLogInSlice = createSlice({
  name: "google_login",
  initialState: {
    google_login: localStorage.getItem("google_login")
      ? JSON.parse(localStorage.getItem("google_login"))
      : [],
  },

  reducers: {
    logIn: (state, action) => {
      state.google_login.push(action.payload);
      localStorage.setItem("google_login", JSON.stringify(state.google_login));
      toast.success("Google Login Success",{position:"top-center"})
    },
    logOut: (state, action) => {
      state.google_login = [];
      localStorage.setItem("google_login", JSON.stringify(state.google_login));
      toast.error("Log out", { position: "top-center" });
    },
  },
});

export const { logIn, logOut } = googleLogInSlice.actions;
export default googleLogInSlice.reducer;
