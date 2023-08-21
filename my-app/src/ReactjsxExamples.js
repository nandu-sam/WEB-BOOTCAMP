import React from "react";

const ReactjsxExamples = () => {
  const handleNameChange = () => {
    const names = ["Trust", "Pray", "Believe"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };
  return (
    <div>
      <h1>Let's {handleNameChange()} in ourselves</h1>
    </div>
  );
};

export default ReactjsxExamples;
