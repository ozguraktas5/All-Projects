import React from "react";
import { Button } from "react-bootstrap";

const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div className="input">
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <Button className="create-note" variant="success" onClick={addTodo}>
        Create Note
      </Button>
    </div>
  );
};

export default TodoInput;
