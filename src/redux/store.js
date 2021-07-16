import { configureStore } from "@reduxjs/toolkit";

// Action creators
export const actions = {
  addTask: (value) => ({
    type: "ADD_TASK",
    payload: value,
  }),
  toggleStroke: (index) => ({
    type: "TOGGLE_STROKE",
    payload: index,
  }),
};

// estado inicial
const initalState = {
  taskList: [],
};

// Reducer fn(currentState, action) => newState
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
export const store = configureStore({
  reducer: taskListReducer,
});

// Selector
export const taskListSelector = (state) => state.taskList;

// // dispatch
// const action = actions.addTask("task1")
// store.dispatch(action);
// store.dispatch(addTask("task1"));
// store.dispatch(addTask("task2"));
// store.dispatch(addTask("task3"));
// store.dispatch(addTask("task4"));

// store.dispatch(toggleStroke(1));
// store.dispatch(toggleStroke(3));

// // console.log(db.getState());
// console.log(taskListSelector());
