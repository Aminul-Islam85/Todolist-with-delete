import { useState } from 'react';
const TodoList = () => {
    const [todo, setTodo] = useState([]);
    const [todos, setTodos] = useState([]);
    return (
        <>
        <h3>My Todos</h3>
        <input 
            placeholder='Type todo here...'
        />
            
        </>
    );
};

export default TodoList;