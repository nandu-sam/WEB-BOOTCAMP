import React, { useState, useEffect } from "react";

const Example = () => {
  const [clicked, setClicked] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("we are in useeffect");
    return () => {
      console.log("return of use state");
    };
  }, [count, clicked]);

  return (
    <div>
      <button onClick={() => setClicked("Welcome")}>Welcome</button>
      <br />
      <br />
      <button onClick={() => setClicked("To react")}>To react</button>
      <br />
      <br />
      <button onClick={() => setClicked("Basics")}>Basics</button>
      <br />
      <br />
      <h1>{clicked}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default Example;
