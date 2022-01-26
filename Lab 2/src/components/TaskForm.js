import React from "react";

export const TaskForm = ({ name, category, setName, setCategory }) => {
  
  return (
    <form>
      <label className="name-input-label" htmlFor="name">
        Name
        <input
          type="text"
          className="name-input"
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder={name}
          text={name}
        ></input>
      </label>
      <label className="category-input-label" htmlFor="name">
        Category
        <input
          type="text"
          className="category-input"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          placeholder={category}
          text={category}
        ></input>
      </label>
      
    </form>
  );
};


