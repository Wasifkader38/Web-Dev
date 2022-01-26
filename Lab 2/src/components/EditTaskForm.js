import React from "react";
import { useState } from "react/cjs/react.development";
import { TaskForm } from "./TaskForm";

export const EditTaskForm = ({ taskName, taskCategory, updateTask, setIsEditing }) => {
  const [name, setName] = useState(taskName);
  const [category, setCategory] = useState(taskCategory);

  return (
    <div className="edit-task-form">
      <TaskForm
        name={name}
        category={category}
        setName={setName}
        setCategory={setCategory}
      />

      <div className="form-buttons">
        <button
          id="edit-task-button"
          onClick={() => updateTask({ name: name, category: category })}
        >
          Update
        </button>
        <button className="cancel-button" onClick={() =>setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};
