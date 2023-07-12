import React from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function App() {
  

  return (
    
      <Container>
        <Button className="icon-button">
          <LightModeIcon className="light-mode"/>
          <DarkModeIcon className="dark-mode"/>
        </Button>
        <h1>Unsplash Images</h1>
        <div className="input-button">
          <input type="search" placeholder="job"/>
          <Button className="success-button" variant="success">Search</Button>
        </div>
        <div className="all-image">

        </div>
      </Container>
    
  );
}

export default App;
