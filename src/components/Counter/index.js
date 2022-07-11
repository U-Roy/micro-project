import React, { useState } from "react";
import "./style.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="main">
    
      <span className="count-value">{count}</span>
      <section className="control-section">
        <button id="increment" onClick={increment}>
          Increment
        </button>
        <button id="decrement" onClick={decrement}>
          Decrement
        </button>
        <button id="reset" onClick={reset}>
          Reset
        </button>
      </section>
    </div>
  );
};

export default Counter;
