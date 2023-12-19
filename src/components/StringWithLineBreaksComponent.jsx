import React from "react";
// Function to render the String containing line breaks with <br> tag
const StringWithLineBreaksComponent = ({
  text,
  bold = false,
  underline = false,
}) => {
  if (!text) {
    return null;
  }

  const parts = text.split("\n");
  let render = parts.map((part, index) => (
    <React.Fragment key={index}>
      {part.trim()}
      {index !== parts.length - 1 && <br />}{" "}
    </React.Fragment>
  ));

  if (bold) {
    render = <b>{render}</b>;
  }
  if (underline) {
    render = <u>{render}</u>;
  }

  return <>{render}</>;
};

export default StringWithLineBreaksComponent;
