import { useState, useEffect } from 'react';
import "./style.scss";
import Loading from './Loading';
import axios from 'axios';
import TodoList from './TodoList';


const TodoApp = () => {
  const [todos, setTodos] = useState(null);

   const handleDelete = (id) => {
    const updateTodos = todos.filter(todo => todo.id !== id);
    setTodos(updateTodos)
  };

  useEffect(() => {
    axios.get("https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos")
      .then((result) => {console.table(result.data);
      setTodos(result.data);
        
      });
  }, []);

  return (
    <div className='todo-list'>
      <h1>Todo List</h1>
      {todos ? <TodoList todos={todos} remove={handleDelete} /> : <Loading />}
      
    </div>
  );

   
} 

export default TodoApp;
