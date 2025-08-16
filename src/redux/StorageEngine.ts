import AsyncStorage from '@react-native-async-storage/async-storage';

// Configuration for redux-persist to use AsyncStorage in React Native
export const persistConfig = {
  key: 'root', // Key used in storage
  storage: AsyncStorage, // Storage engine (AsyncStorage for React Native)
};
