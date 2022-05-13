import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({ name, done, id }) => {
  return (
    <div className="toDoItem">
      <p>{name}</p>
    </div>
  );
};

export default ToDoItem;
