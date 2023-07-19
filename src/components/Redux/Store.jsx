import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import MyReducer from "./ProductState";

const persistconfig = {
    key: "root",
    storage,
}

const persisitedReducer = persistReducer(persistconfig, MyReducer)

export const store = configureStore({
    reducer: { persisitedReducer },
    middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [PERSIST],
              },
          }),
  });

//   Store