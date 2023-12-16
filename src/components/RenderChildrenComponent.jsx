import convertRGBToHex from "../utils/RGBToHexUtil";
import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";
import TagFromStringComponent from "./TagFromStringComponent";

// Function to render the children of the input json
const RenderChildrenComponent = ({ item }) => {
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
        {item.text && <StringWithLineBreaksComponent text={item.text} />}
        {item.children?.map((child, index) => {
          return (
            <TagFromStringComponent
              key={index}
              tagName={child.type || "span"}
              item={child}
            />
          );
        })}
      </span>
    </>
  );
};

export default RenderChildrenComponent;
