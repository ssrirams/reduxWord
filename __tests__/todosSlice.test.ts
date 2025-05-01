import todosReducer, { addTodo, toggleTodo, deleteTodo, Todo } from '../src/redux/reducer/todosSlice';

describe('todosSlice', () => {
    it('should return the initial state', () => {
        expect(todosReducer(undefined, { type: '' })).toEqual([]);
    });

    it('should handle addTodo', () => {
        const state: Todo[] = [];
        const newState = todosReducer(state, addTodo('Learn Redux Toolkit'));
        expect(newState.length).toBe(1);
        expect(newState[0]).toMatchObject({
            text: 'Learn Redux Toolkit',
            completed: false,
        });
        expect(newState[0].id).toBeGreaterThan(0);
    });

    it('should handle toggleTodo', () => {
        const state: Todo[] = [
            { id: 1, text: 'Test toggle', completed: false },
        ];
        const newState = todosReducer(state, toggleTodo(1));

        expect(newState[0].completed).toBe(true);
    });

    it('should handle deleteTodo', () => {
        const state: Todo[] = [
            { id: 1, text: 'Test delete', completed: false },
        ];
        const newState = todosReducer(state, deleteTodo(1));

        expect(newState).toEqual([]);
    });
});
