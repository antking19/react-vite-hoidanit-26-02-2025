const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("eric");
    return (
        <div className="todo-new">
            <input type="text" placeholder="Enter your task" />
            <button className="btn-add">Add</button>
        </div>
    );
};

export default TodoNew;
