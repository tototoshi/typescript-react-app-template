import "./app.css";
import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
