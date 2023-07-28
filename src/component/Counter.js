import React from "react";
import { useState } from "react";
export default function Counter(props) {
  let x = parseInt(props.count);
  const [counter, setCounter] = useState(x);
  const increment = () => {
    //props.count += 1; // This will not work
    setCounter(counter + 1);
  };
  return (
    <div>
      <h3>Count value is {counter} </h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
