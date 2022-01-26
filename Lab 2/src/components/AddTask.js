import React from "react";
import { useState } from "react/cjs/react.development";
import { AddTaskForm } from "./AddTaskForm";

export const AddTask = ({taskList,setTaskList}) => {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  const addTask = (task) => {
    task.id = taskList?.length+1;
    setTaskList([...taskList, task]);
    setIsNewTaskOpen(false);
  };
  return (
    <>
      {isNewTaskOpen ? (
        <AddTaskForm addTask={addTask} setIsNewTaskOpen={setIsNewTaskOpen}/>
      ) : (
        <button
          id="add-button"
          onClick={() => setIsNewTaskOpen(!isNewTaskOpen)}
        >
          <i>+</i>
        </button>
      )}
    </>
  );
};
