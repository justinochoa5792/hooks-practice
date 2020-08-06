import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme("red");
  }
  function IncrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={IncrementCount}>+</button>
    </div>
  );
}

export default App;
