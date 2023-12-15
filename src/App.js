import "./App.css";
import React from "react";

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

const TagFromString = ({ tagName, item }) => {
  let Tag = tagName;
  if (tagName === "mention") {
    Tag = "span";
  } else if (tagName === "lic") {
    Tag = "li";
  } else if (tagName === "block" || tagName === "clause") {
    Tag = "div";
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

const convertRGBToHex = (rgb) => {
  const regex = /\((\d+), (\d+), (\d+)\)/;
  const [_, r, g, b] = rgb.match(regex);
  return `#${(+r).toString(16).padStart(2, "0")}${(+g)
    .toString(16)
    .padStart(2, "0")}${(+b).toString(16).padStart(2, "0")}`;
};

export default App;
