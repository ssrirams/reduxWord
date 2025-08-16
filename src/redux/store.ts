import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { persistConfig } from './StorageEngine';
import { rootReducer } from './RootReducer';

// Create a persisted reducer using the persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure and create the Redux store
export const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializable check for redux-persist compatibility
    }),
    devTools: true,
});

// Create a persistor to be used with PersistGate
export const persistor = persistStore(store);

// Type definitions for use throughout the app
export type RootState = ReturnType<typeof store.getState>; // Gets the full state type
export type AppDispatch = typeof store.dispatch; // Gets the dispatch type
