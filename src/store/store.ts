import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "src/features/cart/cartSlice";
import searchQueriesReducer from "src/features/searchQueries/searchQueriesSlice";
import snackbarReducer from "src/features/snackbar/snackbarSlice";
import userReducer from "src/features/user/userSlice";
import localStorageMiddleware from "./localStorageMiddleware";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    user: userReducer,
    searchQueries: searchQueriesReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
