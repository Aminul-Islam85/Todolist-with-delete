import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        
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
            
        </>
    );
};

export default TodoList;