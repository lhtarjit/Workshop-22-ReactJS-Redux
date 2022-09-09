import React from "react";
import "./todoItem.css";

const TodoItem = ({ name, done, id }) => {
  return (
    <div className="todoItem">
      {/*checkbox */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default TodoItem;
