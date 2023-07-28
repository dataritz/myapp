import React, { useState } from "react";

export default function DemoTodo() {
  const [todoitem, setTodoitem] = useState("");
  const [todoitems, setTodoitems] = useState([]);

  const handleChange = (e) => {
    setTodoitem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // let temp = todoitems;
    // temp.push(todoitem);
    // setTodoitems(temp);
    setTodoitems([
      ...todoitems,
      { id: Math.floor(Math.random() * 10000), name: todoitem },
    ]);
    setTodoitem("");
    console.log(todoitems);
  };

  return (
    <div>
      <h1>My To do App</h1>
      <form onSubmit={handleSubmit}>
        <input value={todoitem} type="text" onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      {todoitems.map((ob) => {
        return (
          <h1>
            {ob.id} {ob.name}
          </h1>
        );
      })}
    </div>
  );
}
