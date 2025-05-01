import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/redux/store'; // ⬅️ Updated path
import TodoList from './src/screens/TodoList';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
}
