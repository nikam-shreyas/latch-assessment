import "./App.css";
import React from "react";
import RenderChildrenComponent from "./components/RenderChildrenComponent";

export const ClauseContext = React.createContext({
  clauseNumber: 0,
  setClauseNumber: () => {},
});

// Main App function
function App() {
  const data = require("./input/input.json");
  return (
    <div className="container">
      {data.map((item, index) => {
        return <RenderChildrenComponent key={index} item={item} />;
      })}
    </div>
  );
}

export default App;
