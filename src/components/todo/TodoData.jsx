const TodoData = (props) => {
    const { name, age, data } = props;
    // const name = props.name;
    // const age = props.age;
    // const data = props.data;

    // console.log(">>> check props: ", props);
    return (
        <div className="todo-data">
            <div className="todo-item">My name is {name}</div>
            <div className="todo-item">Learning React</div>
            <div className="todo-item">Watching Youtube</div>
        </div>
    );
};

export default TodoData;
