import styles from './Todo.module.css'

function Todo({ todo }) {
    return (
        <div className={styles.todoItem}>
            <div className={styles.todoText}>{todo}</div>
        </div>
    )
}

export default Todo;