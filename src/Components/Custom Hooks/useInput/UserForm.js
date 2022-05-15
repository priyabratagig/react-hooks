import React from "react";
import useInput from "./useInput";

function UserForm() {
  const [firstName, bindFirstnameInput, bindFirstNameReset] = useInput("");
  const [lastName, bindLastnameInput, bindLastNameReset] = useInput("");
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    console.log(`Hello ${firstName} ${lastName}`);
  };
  return (
    <div>
      <p>UserForm</p>
      <form onSubmit={submitHandler}>
        <input type="name" {...bindFirstnameInput} />
        <button {...bindFirstNameReset}>reset</button>
        <br />
        <input type="name" {...bindLastnameInput} />
        <button {...bindLastNameReset}>reset</button>
        <br />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default UserForm;
