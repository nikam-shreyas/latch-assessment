import "./App.css";
import React from "react";

// Function to convert the RGB color to Hex color
const convertRGBToHex = (rgb) => {
  const regex = /\((\d+), (\d+), (\d+)\)/;
  const [_, r, g, b] = rgb.match(regex);
  return `#${(+r).toString(16).padStart(2, "0")}${(+g)
    .toString(16)
    .padStart(2, "0")}${(+b).toString(16).padStart(2, "0")}`;
};

// Function to render the String containing line breaks with <br> tag
const StringWithLineBreaks = ({ text }) => {
  if (!text) {
    return null;
  }

  const parts = text.split("\n");

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== parts.length - 1 && <br />}{" "}
        </React.Fragment>
      ))}
    </>
  );
};

// Function to render the mention tagged text seperately
const RenderMention = ({ item }) => {
  return (
    <span
      style={{
        backgroundColor: convertRGBToHex(item.color),
        color: "white",
        borderRadius: "0.3rem",
        padding: "0.1rem",
      }}
    >
      {item.text && <span>{item.text}</span>}
      {item.children &&
        item.children.map((child) => {
          return <TagFromString tagName={child.type || "span"} item={child} />;
        })}
    </span>
  );
};

// Function to render the tags based on the type
const TagFromString = ({ tagName, item }) => {
  let Tag = tagName;
  switch (tagName) {
    case "mention":
      Tag = "span";
      break;
    case "lic":
      Tag = "li";
      break;
    case "block":
    case "clause":
      Tag = "div";
      break;
    default:
      Tag = tagName;
  }

  const elementStyle = {
    fontWeight: item.bold ? "bold" : "",
    textDecoration: item.underline ? "underline" : "",
  };

  return (
    <>
      {tagName === "mention" ? (
        <RenderMention item={item} />
      ) : (
        <Tag>
          <span style={elementStyle}>
            <StringWithLineBreaks text={item.text} />
          </span>
          {item.children &&
            item.children.map((child) => {
              return <RenderChildren item={child} />;
            })}
        </Tag>
      )}
    </>
  );
};

// Function to render the children of the input json
function RenderChildren({ item }) {
  const elementStyle = {
    fontWeight: item.bold ? "bold" : "",
    textDecoration: item.underline ? "underline" : "",
    color: item.color ? "white" : "",
    background: item.color ? convertRGBToHex(item.color) : "",
    borderRadius: item.color ? "0.3rem" : "",
    padding: item.color ? "0.1rem" : "",
  };

  return (
    <>
      <span style={elementStyle}>
        {item.text && <span>{item.text}</span>}
        {item.children &&
          item.children.map((child) => {
            return (
              <TagFromString tagName={child.type || "span"} item={child} />
            );
          })}
      </span>
    </>
  );
}

// Main App function
function App() {
  const data = require("./input/input.json");
  return (
    <div className="container">
      {data.map((item) => {
        return <RenderChildren item={item} />;
      })}
    </div>
  );
}

export default App;
