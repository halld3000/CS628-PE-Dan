import React, { useState } from 'react';
import TodoList from './TodoList';

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, { id: Date.now(), task }]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="app">
            <h1>ToDo List App</h1>
            <TodoList todos={todos} addTodo={addTodo} deleteTodo={deleteTodo} />
        </div>
    );
}