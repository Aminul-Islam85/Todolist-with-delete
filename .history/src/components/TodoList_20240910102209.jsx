import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodo] = useState({description: "", duedate: ""});
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (!todo) {
            alert ("Type something")
        }
        
        setTodos([todo, ...todos])
        setTodo("");
    }
    return (
        <>
        <h3>My Todos</h3>
        <input 
            placeholder='Type todo here...'
            value={todo.description}
            onChange={event => setTodo({...todo, description: event.target.value})}
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