import React from "react";
import { TaskList } from "../../components/TaskList";
import data from "../../resources/task.json";
import "../../styles/home.css";

const Home = (props) => {
  console.log("home");
  
  return (
    <>
      <p id="header">Timers</p>
      <TaskList data={JSON.parse(JSON.stringify(data))} />
    </>
  );
};

export default Home;
