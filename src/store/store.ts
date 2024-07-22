import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "src/features/snackbar/snackbarSlice";
import userReducer from "src/features/user/userSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
