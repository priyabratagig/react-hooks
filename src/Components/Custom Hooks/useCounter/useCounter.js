import { useState, useRef } from "react";

export default function useCounter(initialValue = 0) {
  const initialRef = useRef(initialValue);
  const [count, setCount] = useState(initialValue);
  const increment = (value = 1) => {
    setCount(count + value);
  };
  const decrement = (value = 1) => {
    setCount(count - value);
  };
  const reset = () => {
    setCount(initialRef.current);
  };
  return [count, increment, decrement, reset];
}
