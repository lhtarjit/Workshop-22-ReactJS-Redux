import React from "react";
import "./App.css";
import Input from "./components/input";
import TodoItem from "./components/todoItem";

const todoList = [
  {
    item: "todo",
    done: false,
    id: 946846549,
  },
  {
    item: "todo2",
    done: true,
    id: 8646489,
  },
];

function App() {
  return (
    <div className="App">
      <div className="app__container"></div>
      <div className="app__todoContainer">
        {todoList.map((item) => (
          <TodoItem name={item.item} done={item.done} id={item.id} />
        ))}
      </div>

      <Input />
    </div>
  );
}

export default App;
