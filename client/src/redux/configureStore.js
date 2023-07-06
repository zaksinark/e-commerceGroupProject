import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return action.payload;
    case "CLEAR_SESSION":
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  session: sessionReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

const persistor = persistStore(store);
export { store, persistor };
