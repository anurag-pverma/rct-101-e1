import React from "react";
import AddTask from "./AddTask/AddTask";
import Task from "./Task/Task";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import check from "../data/tasks.json"

export  const mydata = check;
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader/>
      {/* Add Task */}
      <AddTask/>
      {/* Tasks */}
      <Task/>
    </div>
  );
};

export default TaskApp;


