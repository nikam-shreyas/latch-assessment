// Function to render the tags based on the type

import MentionComponent from "./MentionComponent";
import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";
import RenderChildrenComponent from "./RenderChildrenComponent";
import RenderClause from "./RenderClauseComponent";

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
      Tag = "li";
      break;
    default:
      Tag = tagName;
  }

  if (tagName === "mention") {
    return <MentionComponent item={item} />;
  } else if (tagName === "clause") {
    return <RenderClause item={item} />;
  } else
    return (
      <>
        <Tag title={item.title ? item.title : ""}>
          <StringWithLineBreaksComponent
            text={item.text}
            bold={item.bold}
            underline={item.underline}
          />

          {item.children?.map((child, index) => {
            return <RenderChildrenComponent key={index} item={child} />;
          })}
        </Tag>
      </>
    );
};

export default TagFromStringComponent;
