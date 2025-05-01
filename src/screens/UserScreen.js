import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout, setUser, setToken } from '../redux/authSlice'; // Import actions

export default function UserScreen() {
  const dispatch = useDispatch();
  const { isLoggedIn, user, token } = useSelector((state) => state.auth); // Access auth state

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Example of login, you'd likely call an API here
    const mockUser = { name: 'John Doe', email: 'john.doe@example.com' };
    const mockToken = 'mock-jwt-token';

    // Dispatch login action
    dispatch(login({ user: mockUser, token: mockToken }));
  };

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <>
          <Text style={styles.text}>Welcome, {user.name}!</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Token: {token}</Text>
          <Button title="Logout" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text style={styles.text}>Please log in:</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
  },
});
