import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/style.scss";
import axios from "axios";

const Note = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(
        `https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos`
      );
      setTodos(response.data);
      console.log(response)
    } catch (error) {
      console.error("Veri alinamadi:", error);
    }
  };

  const updateTodo = async (id, completed) => {
    try {
      await axios.put(
        `https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos/${id}`,
        { completed: !completed }
      );
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      );
      console.log(updatedTodos);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Güncelleme hatasi:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await axios.delete(
        `https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos/${taskId}`
      );
      console.log(response)
      removeTaskFromList(taskId);
    } catch (error) {
      console.error("Silme hatasi:", error);
    }
  };

  const removeTaskFromList = (taskId) => {
    const updatedTasks = todos.filter((todo) => todo.id !== taskId);
    console.log(updatedTasks)
    setTodos(updatedTasks);
  };

  return (
    <div className="card-container">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <Card.Header className="text-center">{todo.message}</Card.Header>
          <Card.Body className="chk-remove">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => updateTodo(todo.id, todo.completed)}
              className="chk"
            />
            <Button className="button" onClick={() => deleteTask(todo.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Note;
