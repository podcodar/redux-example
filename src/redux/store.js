// import { configureStore } from "@reduxjs/toolkit";
const { configureStore } = require("@reduxjs/toolkit");

// Action creators
const addTask = (value) => ({
  type: "ADD_TASK",
  payload: value,
});

const toggleStroke = (index) => ({
  type: "TOGGLE_STROKE",
  payload: index,
});

const initalState = {
  taskList: [],
};

// Reducer fn(state, action) => newState
function taskListReducer(state = initalState, action = {}) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        taskList: [{ isStroke: false, value: action.payload }, ...state.taskList],
      };

    case "TOGGLE_STROKE":
      return {
        ...state,
        taskList: state.taskList.map((task, index) => ({
          ...task,
          isStroke: index === action.payload ? !task.isStroke : task.isStroke,
        })),
      };

    default:
      return state;
  }
}

// Confugre store (banco de dados da app)
const db = configureStore({
  reducer: taskListReducer,
});

// Selector
const taskListSelector = (state = db.getState()) => state.taskList;

// dispatch
db.dispatch(addTask("task1"));
db.dispatch(addTask("task2"));
db.dispatch(addTask("task3"));
db.dispatch(addTask("task4"));

db.dispatch(toggleStroke(1));
db.dispatch(toggleStroke(3));

// console.log(db.getState());
console.log(taskListSelector());
