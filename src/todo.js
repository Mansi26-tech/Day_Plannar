import React, { useState } from 'react';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React' },
        { id: 2, text: 'Build a to-do list' }
    ]);

    const [newTodo, setNewTodo] = useState('');

    const handleAdd = () => {
        if (newTodo.trim() !== '') {
            const newItem = { id: todos.length + 1, text: newTodo };
            setTodos([...todos, newItem]);
            setNewTodo('');
        }
    };

    const handleRemove = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const handleUpdate = (id) => {
        const updatedText = prompt('Enter new text:', '');
        if (updatedText !== null && updatedText.trim() !== '') {
            setTodos(todos.map(todo => 
                todo.id === id ? { ...todo, text: updatedText } : todo
            ));
        }
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => handleUpdate(todo.id)}>Update</button>
                        <button onClick={() => handleRemove(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={handleAdd}>Add Task</button>
        </div>
    );
};

export default TodoList;
