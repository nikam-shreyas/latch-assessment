import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";
import TagFromStringComponent from "./TagFromStringComponent";

const RenderClause = ({ item }) => {
  return (
    <li>
      <ol>
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
      </ol>
    </li>
  );
};

export default RenderClause;
