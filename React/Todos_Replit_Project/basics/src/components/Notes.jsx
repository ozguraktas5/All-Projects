
import Note from "./Note";
import { Row, Col } from "react-bootstrap";

const Notes = () => {
  

  /* useEffect(() => {
    axios
      .get("https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos")
      .then((result) => {
        console.table(result.data);
        setTodos(result.data);
      });
  }, []); */

 
  return (
    <Row>
      <Col>
        <Note />
      </Col>
    </Row>
  );
};

export default Notes;
