import "./App.css";

const TagFromString = ({ tagName, item }) => {
  const Tag = tagName;
  return (
    <Tag>
      {item.children &&
        item.children.map((child) => {
          return <RenderChildren item={child} />;
        })}
    </Tag>
  );
};

function RenderChildren({ item }) {
  console.log("Render children", item);
  return (
    <>
      <span
        style={{
          fontWeight: item.bold ? "bold" : "",
          textDecoration: item.underline ? "underline" : "",
          color: item.color ? item.color : "",
        }}
      >
        {item.text}
      </span>
      {item.children &&
        item.children.map((child) => {
          return <TagFromString tagName={child.type || "span"} item={child} />;
        })}
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

export default App;
