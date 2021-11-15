import React from "react";
import SearchEngine from "./SearchEngine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchEngine />
      <small>
        <a href="https://github.com/ladyal/weather-react-react" target="_blank">
          Open-source code
        </a>
        , by Allison Brackeen
      </small>
    </div>
  );
}

export default App;
