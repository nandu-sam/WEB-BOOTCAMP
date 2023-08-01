import React, { useState } from "react";

const GreetingForm = () => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <br />
        <button type="submit">Submit</button>
      </form>
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingForm;
