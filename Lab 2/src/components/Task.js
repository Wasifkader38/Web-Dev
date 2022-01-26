import React from "react";
import { useState } from "react/cjs/react.development";
import { Timer } from "../components/Timer";
import { EditTaskForm } from "./EditTaskForm";

export const Task = (props) => {
  const [task, setTask] = useState(props.task);
  const [isEditing, setIsEditing] = useState(false);


  const updateTask = ({ name, category }) => {
    setTask({ ...task, name: name, category: category });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditTaskForm
          taskName={task?.name}
          taskCategory={task?.category}
          updateTask={updateTask}
          setIsEditing={setIsEditing}
        />
      ) : (
        <div className="task-container">
          <div className="task-top">
            <p className="task-name">{task?.name}</p>
            <div className="task-buttons">
              <button
                className="edit-task-button"
                onClick={() => setIsEditing(true)}
              >
                <img src="edit.png" alt="Edit" />
              </button>
              <button
                className="delete-task-button"
                onClick={() => props.removeTask(props.index)}
              >
                <img src="bin.png" alt="Edit" />
              </button>
            </div>
          </div>

          <p className="task-category">{task?.category}</p>
          <div className="task-timer">
            <Timer props_time={task?.time} />
          </div>
        </div>
      )}
    </>
  );
};
