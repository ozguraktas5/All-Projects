import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

const NoteForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState([]);
  
 
  

  const handleButtonClick = async () => {
    try {
      const response = await axios.post(
        "https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos",
        {message: inputValue}
      );
      const newResponseData = [response.data, ...responseData];
      console.log(response.data)
      setResponseData(newResponseData);
      //setInputValue("");
    } catch (error) {
      console.error(error);
    }
  }; 
  return (
    <Container>
      <p className="title mb-2">Title</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-75"
      />
      <br />
      <Button
        className="create-note mt-4"
        variant="success"
        onClick={handleButtonClick}
      >
        Create Note
      </Button>
      {responseData.data}
      
    </Container>
  );
}; 



export default NoteForm;
