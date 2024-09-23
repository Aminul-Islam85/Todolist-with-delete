import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        setTodos([todo, ...todos])
        setTodo("");
    }
    return (
        <>
        <h3>My Todos</h3>
        <input 
            placeholder='Type todo here...'
            value={todo}
            onChange={event => setTodo(event.target.value)}
        />
        <button onClick={handleAdd}>Add Todo</button>
        <table>
            <tbody>
                {
                    todos.map(todo, index) => 
                    <tr key={index}>
                        <td>{todo}</td>
                    </tr>)
                }
            </tbody>
        </table>
            
        </>
    );
};

export default TodoList;