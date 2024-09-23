import { useState } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState({ description: "", duedate: "" });
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (!todo.description || !todo.duedate) {
            alert("Please fill in both fields.");
            return;
        }

        setTodos([todo, ...todos]);
        setTodo({ description: "", duedate: "" });
    };

    return (
        <div className="todo-container">
            <h3>My Todos</h3>
            <div className="input-group">
                <input 
                    placeholder='Type todo here...'
                    value={todo.description}
                    onChange={event => setTodo({ ...todo, description: event.target.value })}
                    className="todo-input"
                />
                <input 
                    placeholder='Due date (e.g., 12.12.2024)'
                    value={todo.duedate}
                    onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                    className="date-input"
                />
                <button onClick={handleAdd} className="add-button">Add Todo</button>
            </div>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.duedate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
