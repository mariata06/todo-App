import './App.css';
import TodoList from './components/Todos/TodoList';
import TodoForm from './components/Todos/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>My Todo App on React</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
