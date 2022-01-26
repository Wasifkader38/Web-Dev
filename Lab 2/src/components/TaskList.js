import React from "react";
import { useState } from "react/cjs/react.development";
import { AddTask } from "./AddTask";
import { Task } from "./Task";

export const TaskList = ({ data }) => {
  const [taskList, setTaskList] = useState(data);

  const removeTask = (index) => {
    taskList.splice(index, 1);
    setTaskList([...taskList]);
  };

  console.log(taskList);
  return (
    <div id="tasklist">
      <ul id="tasklist">
        {taskList?.map((task, index) => {
          return (
            <li key={task.id}>
              <Task index={index} task={task} removeTask={removeTask}/>
            </li>
          );
        })}
      </ul>
      <AddTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
};
