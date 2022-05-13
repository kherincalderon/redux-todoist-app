import React from "react";
import "./ToDoItem.css";
import { Checkbox } from "@material-ui/core";

import { useDispatch } from "react-redux";
import { setCheck } from "../features/toDoSlice";

const ToDoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="toDoItem">
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label ": "secondary checkbox" }}
      />
      <p className={done && "toDoItem--done"}>{name}</p>
    </div>
  );
};

export default ToDoItem;
