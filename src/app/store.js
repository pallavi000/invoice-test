import { configureStore } from "@reduxjs/toolkit";
import invoiceInputReducer from "../features/invoiceInput/InvoiceInputSlice";
import invoiceReducer from "../features/invoice/InvoiceSlice";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

const reducers = combineReducers({
  invoiceInput: invoiceInputReducer,
  invoice: invoiceReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["add-invoice"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
