const TodoTable = (props) => {
    return (
        <table className="todo-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.duedate}</td>
                            <td>{todo.description}</td>
                            <td>
                                <button 
                                    className="delete-button" 
                                    onClick={() => props.handleDelete(index)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default TodoTable;
