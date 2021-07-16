import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ taskList, setTaskList }) {
  function toggleStroke(index) {
    setTaskList((list) =>
      list.map((task, i) => ({
        ...task,
        isStroke: i === index ? !task.isStroke : task.isStroke,
      }))
    );
  }

  return (
    <div>
      {taskList.map(({ isStroke, value }, index) => (
        <TaskItem isStroke={isStroke} value={value} onClick={() => toggleStroke(index)} />
      ))}
    </div>
  );
}

export default TaskList;
