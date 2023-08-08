/*useState Explanation:
In the given code, you're using the useState hook from React. 
It's used to add state to functional components. Specifically, 
you're declaring a state variable called count and a function called setCount 
that will be used to update the count value.

Default Value:
The initial value of the count state is indeed set to 0 using useState(0).
 This value is the initial state that the count variable will hold when 
 the component first renders.

Updating State:
The increment function uses the setCount function to update the value of count.
 It takes the current value of count (accessed using a closure) and adds 1 to it.
  When this function is called by clicking the "Increment" button, 
  it triggers a re-render of the component with the updated value of count.

JSX Rendering:
The value of count is displayed within an <h1> element in the JSX. 
This value will be updated whenever count changes due to the setCount function being called.

Button Interaction:
When the "Increment" button is clicked, the increment function is invoked,
 which in turn updates the count state using the setCount function.
  This leads to a re-render of the component, displaying the updated value of count.*/
import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Count;
