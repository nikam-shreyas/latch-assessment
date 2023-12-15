import "./App.css";

function RenderBase({ item }) {
  console.log("Base", item);
  return (
    <div>
      {item.children &&
        item.children.map((child) => {
          return <RenderChildren item={child} />;
        })}
    </div>
  );
}

function RenderP({ item }) {
  console.log("P", item);
  return (
    <p style={{ fontWeight: item.bold ? "bold" : "" }}>
      {item.text}
      {item.children &&
        item.children.map((child) => {
          return <RenderChildren item={child} />;
        })}
    </p>
  );
}

function RenderH({ item }) {
  return (
    <h1>
      {item.text}
      {item.children &&
        item.children.map((child) => {
          return <RenderChildren item={child} />;
        })}
    </h1>
  );
}

function RenderUL({ item }) {
  return (
    <ul>
      {item.children &&
        item.children.map((child) => {
          return <RenderChildren item={child} />;
        })}
    </ul>
  );
}

function RenderLI({ item }) {}

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
          // switch (child.type) {
          //   case "h1":
          //   case "h2":
          //   case "h3":
          //   case "h4":
          //   case "h5":
          //   case "h6":
          //     return <RenderH item={child} />;
          //   case "text":
          //     return <>{child.text}</>;
          //   case "p":
          //   case "mention":
          //     return <RenderP item={child} />;
          //   case "block":
          //     return <RenderChildren item={child} />;
          //   case "clause":
          //     return <RenderChildren item={child} />;
          //   case "ul":
          //     return <RenderUL item={child} />;
          //   case "li":
          //   case "lic":
          //     return <RenderLI item={child} />;

          //   default:
          //     break;
          // }
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
