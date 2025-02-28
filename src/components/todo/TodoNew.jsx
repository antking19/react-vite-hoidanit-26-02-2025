const TodoNew = (props) => {
    console.log(props);
    const { addNewTodo } = props;

    // addNewTodo("eric");
    const handleClick = () => {
        alert("click me");
    };

    const handleOnChange = (name) => {
        console.log(">>> handleOnChange", name);
    };

    return (
        <div className="todo-new">
            <input
                type="text"
                placeholder="Enter your task"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button className="btn-add" onClick={handleClick}>
                Add
            </button>
        </div>
    );
};

export default TodoNew;
