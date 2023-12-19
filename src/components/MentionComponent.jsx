import TagFromStringComponent from "./TagFromStringComponent";
import convertRGBToHex from "../utils/RGBToHexUtil";
import StringWithLineBreaksComponent from "./StringWithLineBreaksComponent";

function changeValue(id, newValue) {
  document.getElementsByName(id).forEach((element) => {
    element.innerHTML = newValue;
  });
  console.log(document.getElementsByName(id));
}

const MentionComponent = ({ item }) => {
  let id = item.id.replaceAll(" ", "-");
  return (
    <span
      style={{
        backgroundColor: convertRGBToHex(item.color),
        color: "white",
        borderRadius: "0.3rem",
        padding: "0.1rem",
      }}
      name={id}
      onClick={() => changeValue(id, "new Value")}
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
