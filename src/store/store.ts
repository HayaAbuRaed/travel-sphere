import { configureStore } from "@reduxjs/toolkit";
import snackbarReducer from "src/features/snackbar/snackbarSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
