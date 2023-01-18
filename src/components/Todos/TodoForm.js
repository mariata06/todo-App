import { useState } from 'react';
import styles from './TodoForm.module.css'
import Button from '../UI/Button';

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
                <Button type="submit" title="Submit">Submit</Button>   
            </form>
        </div>  
    )
}

export default TodoForm;