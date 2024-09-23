import { useState } from 'react';

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

    return (
        <>
            <h3>My Todos</h3>
            <input 
                placeholder='Type todo here...'
                value={todo.description}
                onChange={event => setTodo({ ...todo, description: event.target.value })}
            />
            <input 
                placeholder='duedate here...'
                value={todo.duedate}
                onChange={event => setTodo({ ...todo, duedate: event.target.value })}
            />
            <button onClick={handleAdd}>Add Todo</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.description}</td>
                            <td>{todo.duedate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default TodoList;
