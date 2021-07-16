import React from "react";
import { useTaskList } from "./redux/hooks";

const strokeStyle = { color: "green" };

function TaskItem({ value, isStroke, index }) {
  const { toggleStroke } = useTaskList();
  return (
    <div onClick={() => toggleStroke(index)}>
      <p style={isStroke ? strokeStyle : {}}>{value}</p>
    </div>
  );
}

export default TaskItem;
