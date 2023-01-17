import { useState } from 'react';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';
import './App.css';

function App() {

  const [todos, setTodos] = useState([])

  //- обработчик добавления новой задачи
  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  return (
    <div className="App">
      <h1>My Todo App on React</h1>
      <TodoForm addTodoItem={addTodoHandler}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
