const TodoTable = (props) => {
    return (
        <table>
        <tbody>
            <tr>
                <th>Description</th>
                <th>Date</th>
            </tr>
            {
                props.todos.map((todo, index) =>
                <tr key={index}>
                <td>{todo.description}</td>
                <td>{todo.duedate}</td>

                </tr>
                )
            }
        </tbody>
        </table>
    );
};

export default TodoTable;