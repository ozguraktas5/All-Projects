import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Container } from "react-bootstrap";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function App() {
  const [searchText, setSearchText] = useState("");
  const [result, setResult] = useState([]);
  const [sun, setSun] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = sun ? "white" : "black";
  }, [sun]);

  const handleClick = () => {
    setSun(!sun);
  };

  const handleSearch = () => {
    const query = searchText;

    fetch(
      `https://api.unsplash.com/search/photos?query=${query}&client_id=I8X2yX1ZJxmbA0Q15SRLNFx2oyIIveKox-ob74REVnI`
    )
      .then((response) => response.json())
      .then((data) => {
        const results = data.results || [];
        console.log(data);
        setResult(results);
      })

      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Button className="icon-button">
        {sun ? (
          <LightModeIcon className="light-mode" onClick={handleClick} />
        ) : (
          <DarkModeIcon className="dark-mode" onClick={handleClick} />
        )}
      </Button>
      <h1>Unsplash Images</h1>
      <div className="input-button">
        <input
          className="input-light"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          className="success-button"
          variant="success"
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div className="all-image">
        {result &&
          result.map((item, index) => (
            <img key={index} src={item.urls.small} alt="images" />
          ))}
      </div>
    </Container>
  );
}

export default App;
