import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <a href="#">
          Download Source Code
        </a>{" "}
        | Developed by{" "}
        <a target="_blank" href="#">
          Ishwarsing
        </a>{" "}
        | Powered by{" "}
        <a target="_blank" href="#">
          DEV Ishwar
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
