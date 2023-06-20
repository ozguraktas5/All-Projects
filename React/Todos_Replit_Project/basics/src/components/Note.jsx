import React from "react";
import { Button, Card } from "react-bootstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scss/style.scss";
const Note = ({ todos }) => {
  return (
      <>
        {todos.map((todo) => (
        <Card key={todo.id}>
          <Card.Header>{todo.message}</Card.Header>
          <Card.Body>
            <input type="checkbox" />
            <Button className="button">
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Card.Body>
        </Card>
      ))}
      </>
      
    
  );
};

export default Note;
