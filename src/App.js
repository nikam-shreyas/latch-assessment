import "./App.css";
import React from "react";
import RenderChildrenComponent from "./components/RenderChildrenComponent";

// Main App function
function App() {
  const data = require("./input/input.json");

  return (
    <div className="container">
      <ol>
        <RenderChildrenComponent item={data[0]} />
      </ol>
    </div>
  );
}

export default App;
