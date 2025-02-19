import { configureStore } from "@reduxjs/toolkit";
import { messagesApi } from "./messagesApi";

const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messagesApi.middleware),
});

export default store;
