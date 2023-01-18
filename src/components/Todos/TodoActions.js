import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from "../UI/Button";

function TodoActions({ resetTodos, deleteCompletedTodos }) {
    return (
        <>
            <Button title="Reset TodoItems" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Clear Completed TodoItems" onClick={deleteCompletedTodos}><RiDeleteBin2Line /></Button>
        </>
    )
}

export default TodoActions;