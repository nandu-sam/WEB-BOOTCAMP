import React, { useState, useMemo } from "react";

const ExpensiveCalculation = ({ number }) => {
  console.log("Performing expensive calculation");
  // Simulate an expensive calculation
  let result = 0;
  for (let i = 1; i <= number; i++) {
    result += i;
  }
  return <div>Result: {result}</div>;
};

const MemoExample = () => {
  const [count, setCount] = useState(1);
  const [number, setNumber] = useState(10);

  const handleNumberChange = (e) => {
    setNumber(Number(e.target.value));
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  // useMemo to memoize the ExpensiveCalculation component
  const memoizedExpensiveCalculation = useMemo(() => {
    return <ExpensiveCalculation number={number} />;
  }, [number]);

  return (
    <div>
      <button onClick={handleIncrement}>Increment Count</button>
      <p>Count: {count}</p>
      <input type="number" value={number} onChange={handleNumberChange} />
      {memoizedExpensiveCalculation}
    </div>
  );
};

export default MemoExample;
