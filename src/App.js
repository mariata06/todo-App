import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; //- генерирует уникальный id
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  //- обработчик добавления новой задачи
  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(), //-вызов функции генерации уникального id
    }

    console.log(newTodo);
    setTodos([...todos, newTodo])
  }

  //- обработчик удаления выполненных задач
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="App">
      <h1>My Todo App on React</h1>
      <TodoForm addTodoItem={addTodoHandler}/>
      <TodoList todos={todos} deleteTodoItem={deleteTodoHandler}/>
    </div>
  );
}

export default App;
