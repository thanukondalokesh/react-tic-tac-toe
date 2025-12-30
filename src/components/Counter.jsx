import React, { useState } from "react";
import "../App.css";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
  <h3 className="counter-title">Counter: {count}</h3>

  <div className="counter-buttons">
    <button
      className="increment"
      onClick={() => setCount(count + 1)}
    >
      Increment
    </button>

    <button
      className="decrement"
      onClick={() => setCount(count - 1)}
    >
      Decrement
    </button>
  </div>
</div>

  );
}

export default Counter;
