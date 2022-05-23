import React from "react";
import styles from "./task.module.css";
import { mydata } from "../TaskApp";
import Counter from "../Counter/Counter";


const Task = () => {
  // NOTE: do not delete `data-cy` key value pair

  console.log(mydata);
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text">
      {
        mydata.map((item)=>{
          return <>
          

          <p>{item.text} <span><Counter data = {item.count} /></span></p> 
          {/* <p>{item.count}</p> */}
          
          </>
        })

      }

      </div>
      {/* Counter here */}
      <button data-cy="task-remove-button"></button>
    </li>
  );
};

export default Task;
