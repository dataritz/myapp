import React, { useState } from "react";

export default function StateArray() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState("");
  return (
    <div>
      <>
        <label>
          First name:
          <input
            value={name}
            onChange={(e) => {
              setName(...name, e.target.value);
              setNames(...names, name);
              //setName("");
            }}
          />
        </label>
      </>
      <p>{names}</p>
    </div>
  );
}
