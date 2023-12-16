import TagFromStringComponent from "./TagFromStringComponent";
import convertRGBToHex from "../utils/RGBToHexUtil";

const MentionComponent = ({ item }) => {
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
  );
};

export default MentionComponent;
