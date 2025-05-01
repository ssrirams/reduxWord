import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../redux/counterSlice'; // ⬅️ Updated path

export default function CounterScreen() {
  const {value, name} = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{name}</Text>
      <Text style={styles.counterText}>{value}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
      <Button title="Reset" onPress={() => dispatch(reset())} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
});
