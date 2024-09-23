import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);
    return (
        <>
        <h3>My Todos</h3>
        <input 
            placeholder='Type todo here...'
            value={todo}
            onChange={event => setTodo(event.target.value)}
        />
            
        </>
    );
};

export default TodoList;