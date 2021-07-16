import React from "react";

const strokeStyle = { color: "green" };

function TaskItem({ value, isStroke, onClick }) {
  return (
    <div onClick={onClick}>
      <p style={isStroke ? strokeStyle : {}}>{value}</p>
    </div>
  );
}

export default TaskItem;
