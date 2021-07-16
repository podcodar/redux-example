import React from "react";
import { useTaskList } from "./redux/hooks";
import TaskItem from "./TaskItem";

function TaskList() {
  const { taskList } = useTaskList();
  return (
    <div>
      {taskList.map(({ isStroke, value }, index) => (
        <TaskItem isStroke={isStroke} value={value} index={index} />
      ))}
    </div>
  );
}

export default TaskList;
