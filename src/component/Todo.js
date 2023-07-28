import React, { useState } from "react";

export default function Todo() {
  const [todoItem, setTodoItem] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (e) => {
    setTodoItem(e.target.value);
    //console.log(todoItem);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let temp = todoItems;
    temp.push(todoItem);
    setTodoItems(temp);
    setTodoItem("");
    console.log(todoItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoItem}
          onChange={handleChange}
          name="text"
        />
        <button type="submit">add</button>
      </form>
      {todoItems.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}
