import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./pages/counter/store/counter.reducer";
import { favouritesReducer } from "./pages/favourites/store/favourites.reducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  blackList: () => [],
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
