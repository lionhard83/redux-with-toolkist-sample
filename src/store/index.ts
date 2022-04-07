import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counter/counter.reducer";
import { favouritesReducer } from "./favourites/favourites.reducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  blackList: () => [],
  counter: counterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
