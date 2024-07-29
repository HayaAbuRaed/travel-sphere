import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "src/features/cart/cartSlice";
import searchQueriesReducer from "src/features/searchQueries/searchQueriesSlice";
import snackbarReducer from "src/features/snackbar/snackbarSlice";
import userReducer from "src/features/user/userSlice";

const store = configureStore({
  reducer: {
    snackbar: snackbarReducer,
    user: userReducer,
    searchQueries: searchQueriesReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
