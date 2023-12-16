import React from "react";
// Function to render the String containing line breaks with <br> tag
const StringWithLineBreaksComponent = ({ text }) => {
  if (!text) {
    return null;
  }

  const parts = text.split("\n");

  return (
    <>
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {part.trim()}
          {index !== parts.length - 1 && <br />}{" "}
        </React.Fragment>
      ))}
    </>
  );
};

export default StringWithLineBreaksComponent;
