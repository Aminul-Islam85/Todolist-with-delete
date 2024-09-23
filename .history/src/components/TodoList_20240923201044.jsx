import { useState } from 'react';
import TodoTable from './TodoTable';

const TodoList = () => {
    const [todo, setTodo] = useState({ description: "", duedate: "" });
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (!todo.description || !todo.duedate) {
            alert("Type something in both fields");
            return;
        }

        setTodos([todo, ...todos]);
        setTodo({ description: "", duedate: "" });
    };

    const handleDelete = (row) => {
        setTodos(todos.filter((_, index) => row !== index));
    };

    return (
        <div className="todo-container">
            <div className="header">
                <h2>Simple Todolist</h2>
            </div>
            <div className="form-container">
                <span className="add-todo-label">Add todo:</span>
                <form onSubmit={(e) => { e.preventDefault(); handleAdd(); }}>
                    <label htmlFor="description">Description:</label>
                    <input 
                        type="text" 
                        id="description"
                        placeholder='Description'
                        value={todo.description}
                        onChange={event => setTodo({ ...todo, description: event.target.value })}
                    />
                    <label htmlFor="duedate">Date:</label>
                    <input 
                        type="date" 
                        id="duedate"
                        placeholder='Date'
                        value={todo.duedate}
                        onChange={event => setTodo({ ...todo, duedate: event.target.value })}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
            <TodoTable todos={todos} handleDelete={handleDelete} />
        </div>
    );
};

export default TodoList;
