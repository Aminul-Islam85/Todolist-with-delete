import { useState } from 'react';
import TodoTable from './TodoTable';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid


const TodoList = () => {
    const [todo, setTodo] = useState({ description: "", duedate: "", priority: "" });
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
        setTodos(todos.filter((_, index) => row != index));
    }

    return (
        <>
            <h3>My Todos</h3>
            <input 
                placeholder='Description'
                value={todo.description}
                onChange={event => setTodo({ ...todo, description: event.target.value })}
            />
            <input 
                placeholder='date'
                value={todo.duedate}
                onChange={event => setTodo({ ...todo, duedate: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>
           <TodoTable todos={todos} handleDelete={handleDelete}/>
          
        </>
    );
};

export default TodoList;
