import { useState, useEffect } from "react";
import axios from "axios";
import Note from "./Note";
import { Row, Col } from "react-bootstrap";

const Notes = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos")
      .then((result) => {
        console.table(result.data);
        setTodos(result.data);
      });
  }, []);
  return (
    <Row>
      <Col md={6} lg={4} xl={4}>
        <Note todos={todos} />
      </Col>
    </Row>
  );
};

export default Notes;
