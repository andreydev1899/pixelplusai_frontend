import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Profile {
  email: string;
  role: { name: string };
  status: { name: string };
}

interface AuthState {
  isAuth: boolean;
  authMe: Profile | null;
  forgotEmail: string;
}

const initialState: AuthState = {
  isAuth: false,
  authMe: null,
  forgotEmail: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuth: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUserProfile: (state: AuthState, action: PayloadAction<Profile>) => {
      state.authMe = action.payload;
    },
    setForgotEmail: (state: AuthState, action: PayloadAction<string>) => {
      state.forgotEmail = action.payload;
    },
  },
});

export const { setUserAuth, setUserProfile, setForgotEmail } =
  authSlice.actions;

export default authSlice.reducer;
