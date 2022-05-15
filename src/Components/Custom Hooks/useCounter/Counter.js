import React from "react";
import useCounter from "./useCounter";
function Counter({ initial = 0, change = 1 }) {
  const [count, increment, decrement, reset] = useCounter(initial);
  return (
    <div>
      <p>Counter - {count}</p>
      <button onClick={() => increment(change)}>Increment</button>
      <button onClick={() => decrement(change)}>Decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  );
}

export default Counter;
