import { useReducer, useState } from "react";
import "./App.css";
import { List } from "./components/List";

const taskReducer = (state, action) => {
  switch (action.type.toLowerCase()) {
    case "add_task":
      return [
        ...state,
        { id: Math.round(Math.random() * 1000000), title: action.task, isEditMode: false },
      ];
    case "delete_task":
      return state.filter((_, index) => index !== action.index);
    case "enable_edit_task": {
      const newState = state.map((task, index) =>
        index === action.index ? { ...task, isEditMode: true } : task
      );
      return newState;
    }
    case "cancel_edit_task": {
      return state.map((task, index) =>
        index === action.index ? { ...task, isEditMode: false } : task
      );
    }
    case "appy_edit_changes": {
      return state.map((task, index) =>
        index === action.index
          ? { ...task, title: action.title, isEditMode: false }
          : task
      );
    }
    default:
      return null;
  }
};

function App() {
  const [input, setInput] = useState("");
  const [taskList, dispatch] = useReducer(taskReducer, []);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const duplicateTaskChecker = (newTask) => {
    const duplicateTask = taskList.find(
      ({ title }) =>
        title.toString().toLowerCase() === newTask.toString().toLowerCase()
    );
    return duplicateTask;
  };

  const findTaskIndex = (task) => {
    const taskIndex = taskList.findIndex(({ title }) => title === task);
    return taskIndex;
  };

  const deleteTaskAction = (task) => {
    const indexToBeDeleted = findTaskIndex(task);
    dispatch({ type: "delete_task", index: indexToBeDeleted });
  };

  const taskInEditMode = () => taskList.find((task) => task.isEditMode);

  const editTaskAction = (task) => {
    if (taskInEditMode()) {
      alert("Only on edit can be performed at a time");
    } else {
      const indexToBeEdited = findTaskIndex(task);
      dispatch({ type: "enable_edit_task", index: indexToBeEdited });
    }
  };

  const cancelEditAction = (task) => {
    const indexToBeCancelled = findTaskIndex(task);
    dispatch({ type: "cancel_edit_task", index: indexToBeCancelled });
  };

  const applyChangeAction = ([task, newTask]) => {
    const duplicateTask = duplicateTaskChecker(newTask);
    const indexToBeEdited = findTaskIndex(task);
    if(duplicateTask){
      alert("Task already exists, please change your task.")
     return  dispatch({type :"cancel_edit_task", index : indexToBeEdited})
    }
    
    return dispatch({
      type: "appy_edit_changes",
      index: indexToBeEdited,
      title: newTask,
    });
  };

  const submitButtonClickHandler = (e) => {
    e.preventDefault();
    if (input) {
      if (duplicateTaskChecker(input)) {
        alert("Duplicate tasks cannot be added");
      } else {
        dispatch({ type: "add_task", task: input });
      }
    }
    setInput("");
  };
  return (
    <div>
      <input
        placeholder="Add New Task"
        onChange={handleInputChange}
        value={input}
      />
      <button type="submit" onClick={submitButtonClickHandler}>
        Submit
      </button>
      <List
        listItems={taskList}
        onDeleteClick={deleteTaskAction}
        onEditClick={editTaskAction}
        onCancelClick={cancelEditAction}
        onApplyChangeClick={applyChangeAction}
      />
    </div>
  );
}

export default App;
