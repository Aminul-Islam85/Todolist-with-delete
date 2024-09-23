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
            <h3>Simple Todolist</h3>
            <div className="input-group">
                <label>
                    Description:
                    <input 
                        type="text"
                        value={todo.description}
                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                        className="todo-input"
                    />
                </label>
                <label>
                    Date:
                    <input 
                        type="text"
                        value={todo.duedate}
                        onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                        className="date-input"
                    />
                </label>
                <button onClick={handleAdd} className="add-button">Add</button>
            </div>
            <table className="todo-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.duedate}</td>
                            <td>{todo.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;
