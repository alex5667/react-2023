import homeSlice from './reducers/HomeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import formSlice from './reducers/FormSlice';
import { productsApi } from 'services/ProductsApi';

const rootReducer = combineReducers({
  formSlice,
  homeSlice,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
