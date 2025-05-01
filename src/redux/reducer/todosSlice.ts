import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const initialState: Todo[] = [];

let nextId = 1;

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({ id: nextId++, text: action.payload, completed: false });
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            return state.filter((t) => t.id !== action.payload);
        },
    },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
