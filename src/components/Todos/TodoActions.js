import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';

function TodoActions({ resetTodos, deleteCompletedTodos, completedTodosExist }) {
    return (
        <div className={styles.todoActionsContainer}>
            <Button title="Reset TodoItems" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Clear Completed TodoItems" onClick={deleteCompletedTodos} disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodoActions;