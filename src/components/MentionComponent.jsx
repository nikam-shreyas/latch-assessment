import TagFromStringComponent from "./TagFromStringComponent";
import convertRGBToHex from "../utils/RGBToHexUtil";
import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";

function changeValue(id, newValue) {
  document.getElementById(id).innerHTML = newValue;
  console.log(id);
}

const MentionComponent = ({ item }) => {
  return (
    <span
      style={{
        backgroundColor: convertRGBToHex(item.color),
        color: "white",
        borderRadius: "0.3rem",
        padding: "0.1rem",
      }}
      id={item.id}
      onClick={() => changeValue(item.id, "new Value")}
    >
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
  );
};

export default MentionComponent;
