import React from "react";
import styles from "./counter.module.css";
import { useState } from "react";

const Counter = ( props) => {
  console.log(props)
  // sample value to be replaced
  const count = props.data;
  const [ccount, setcCount] = useState(count)
  // NOTE: do not delete `data-cy` key value pair



  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={()=>setcCount(ccount+1)}>+</button>
      <span data-cy="task-counter-value">{ccount}</span>
      <button data-cy="task-counter-decrement-button"onClick={()=>setcCount(ccount+1)}>-</button>
    </div>
  );
};

export default Counter;
