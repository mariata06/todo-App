import Todo from "./Todo";
import styles from './TodoList.module.css'

function TodoList(props) {

    const { todos, deleteTodoItem } = props;

    return (
        <div className={styles.todoListContainer}>
            {/* //- если todos.length === 0  */}
            {!todos.length && <h2>Todo List is empty</h2>}
            {todos.map((item, index) => <Todo key={index} todo={item} index={index} deleteTodo={deleteTodoItem}/>)}
        </div>
    )
}

export default TodoList;