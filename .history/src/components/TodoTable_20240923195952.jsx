const TodoTable = (props) => {
    return (
        <table className="todo-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) =>
                        <tr key={index}>
                            <td>{todo.duedate}</td>
                            <td>{todo.description}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default TodoTable;
