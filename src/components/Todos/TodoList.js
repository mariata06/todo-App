import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList(props) {

    const { todos } = props;

    return (
        <div className={styles.todoListContainer}>
            {todos.map((item, index) => <Todo key={index} todo={item} />)}
        </div>
    )
}

export default TodoList;