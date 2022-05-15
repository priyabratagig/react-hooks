import { useRef, useState } from "react";
function useInput(initialValue = "") {
  const initialRef = useRef(initialValue);
  const [value, setValue] = useState(initialValue);
  const input = {
    value,
    onChange({ target: { value = "" } = "" }) {
      setValue(value);
    },
  };
  const reset = {
    type: "reset",
    onClick() {
      setValue(initialRef.current);
    },
  };
  return [value, input, reset];
}
export default useInput;
