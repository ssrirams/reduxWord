import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/Store';
import { addTodo, deleteTodo, toggleTodo } from '../redux/reducer/todosSlice';

const TodoList: React.FC = () => {
    const [text, setText] = useState<string>('');
    const todos = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === '') { return; }
        dispatch(addTodo(text));
        setText('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Enter TODO</Text>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Add todo"
                placeholderTextColor={'#999'}
                style={styles.input}
            />
            <Button title="Create" onPress={handleAdd} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
                            <Text style={[styles.todoText, item.completed && styles.completed]}>
                                {item.text}
                            </Text>
                        </TouchableOpacity>
                        <Button title="Close" onPress={() => dispatch(deleteTodo(item.id))} />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, backgroundColor: '#fff' },
    title: { fontSize: 16, fontWeight: '400', marginBottom: 10 },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    todoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    todoText: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TodoList;
