import React, { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreeting(`Hello, ${name}!`);
    setName(""); // Reset the name input field after submitting the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
