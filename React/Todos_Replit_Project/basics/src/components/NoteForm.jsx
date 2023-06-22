import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import axios from "axios";

const NoteForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState([]);

  const handleNoteChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    if (inputValue.trim() !== "") {
      try {
        const response = await axios.post(
          "https://648be99f8620b8bae7ebe9d1.mockapi.io/api/v1/todos",
          { message: inputValue }
        );

        if (response.status === 200) {
          const data = response.data;
          setResponseData((prevDatas) => [...prevDatas, data.inputValue]);
          setInputValue('');
        }
        else {
          console.error('Failed');
        }
        
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };
  return (
    <Container>
      <p className="title mb-2">Title</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleNoteChange}
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
    </Container>
  );
};

export default NoteForm;
