/*import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  if (typeof window !== "undefined") {
    return {
      token: sessionStorage .getItem("authToken") || null,
      name: sessionStorage .getItem("username") || "",
    };
  }
  return { token: null, name: "" }; // Retourne un état valide côté serveur
};

const authSlice = createSlice({
  name: "auth",
  initialState : getInitialState(),
  //token: typeof window !== "undefined" ? sessionStorage .getItem("authToken") || null : null,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      sessionStorage .setItem("authToken", action.payload.token);
      sessionStorage .setItem("username", action.payload.name);
      console.log("données stockées");
      setTimeout(() => {
        state.token = null;
        sessionStorage .removeItem("authToken");
      }, 60 * 60 * 1000);
    },
    logout: (state) => {
      state.token = null;
      sessionStorage .removeItem("username");
      sessionStorage .removeItem("authToken");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;*/

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: typeof window !== "undefined" ? sessionStorage .getItem("authToken") : null,
  name: typeof window !== "undefined" ? sessionStorage .getItem("username") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.name = action.payload.name;
      if (typeof window !== "undefined") {
        sessionStorage .setItem("authToken", action.payload.token);
        sessionStorage .setItem("username", action.payload.name);
      }
    },
    logout: (state) => {
      state.token = null;
      state.name = null;
      if (typeof window !== "undefined") {
        sessionStorage .removeItem("authToken");
        sessionStorage .removeItem("username");
      }
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

