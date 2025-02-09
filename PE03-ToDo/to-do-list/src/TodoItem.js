import React from 'react';

export default function TodoItem({ todo, deleteTodo }) {
    return (
        <li>
            <span>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
    );
}
