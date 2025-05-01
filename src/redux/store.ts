// import { configureStore } from '@reduxjs/toolkit';
// import todosSlice from './reducer/todosSlice';

// export const store = configureStore({
//   reducer: {
//     todos: todosSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import todosSlice from './reducer/todosSlice'; // Import your todos slice reducer

// Configuration for redux-persist to use AsyncStorage in React Native
const persistConfig = {
  key: 'root', // Key used in storage
  storage: AsyncStorage, // Storage engine (AsyncStorage for React Native)
};

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
  todos: todosSlice, // Add your todos slice to the state
});

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
