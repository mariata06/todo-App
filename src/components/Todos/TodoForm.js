import { useState } from "react";
import styles from './TodoForm.module.css'

function TodoForm({ addTodoItem }) {
    const [text, setText] = useState('');

    //- обработчик отправки формы
    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (text !== "") {
            addTodoItem(text);
        }
        setText(''); //- очищение поля ввода
    }

    return (
        <div className={styles.todoFormContainer}>
            <form onSubmit={onSubmitHandler}>
                <input placeholder="Enter new todo" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Submit</button>   
            </form>
        </div>  
    )
}

export default TodoForm;