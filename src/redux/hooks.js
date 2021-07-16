import { useDispatch, useSelector } from "react-redux";
import { taskListSelector, actions } from "./store";

export function useTaskList() {
  const dispatch = useDispatch();
  const taskList = useSelector(taskListSelector);

  // react actions
  const addTask = (task) => dispatch(actions.addTask(task));
  const toggleStroke = (task) => dispatch(actions.toggleStroke(task));

  return { taskList, addTask, toggleStroke };
}
