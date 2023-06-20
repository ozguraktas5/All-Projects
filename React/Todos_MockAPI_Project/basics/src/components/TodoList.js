import React from "react";
import CheckBox from "./CheckBox";
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TodoList = ({ todos, remove }) => {
  return (
    <ul className="ul-todo">
      {todos.map((todo) => (
        <li className="todo" key={todo.id}>
          {todo.title}
          <CheckBox />
          <button
            className="delete-button"
            onClick={() => 
              remove(todo.id)
            }
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
