import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";


const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [input, setInput] = useState("")
  const [value, setValue] = useState("")
  
const handleClick=()=>{
  setValue(input)
  console.log(input)
}

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  onChange={(event)=> setInput(event.target.value)}/>

      <button data-cy="add-task-button" onClick={handleClick}>+</button>
      <h1>{value}</h1>
    </div>
  );
};

export default AddTask;
