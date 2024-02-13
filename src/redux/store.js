import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from './carsSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { favoriteCarsPersistReducer } from './favoriteCarsSlice';

export const store = configureStore({
  reducer: {
    cars: carReducer,
    favoriteCars: favoriteCarsPersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
