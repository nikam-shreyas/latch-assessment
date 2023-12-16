// Function to render the tags based on the type

import MentionComponent from "./MentionComponent";
import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";
import RenderChildrenComponent from "./RenderChildrenComponent";

const TagFromStringComponent = ({ tagName, item }) => {
  let Tag = tagName;
  switch (tagName) {
    case "mention":
      Tag = "span";
      break;
    case "lic":
      Tag = "li";
      break;
    case "block":
      Tag = "div";
      break;
    case "clause":
      Tag = "ol";
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
        <MentionComponent item={item} />
      ) : (
        <Tag>
          <span style={elementStyle}>
            <StringWithLineBreaksComponent text={item.text} />
          </span>
          {item.children?.map((child, index) => {
            return <RenderChildrenComponent key={index} item={child} />;
          })}
        </Tag>
      )}
    </>
  );
};

export default TagFromStringComponent;
