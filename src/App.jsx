import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("");
  function decCount() {
    setCount(count - 1);
    if (count <= 6) {
      setColor("Red");
    } else if (count > 6) {
      setColor("Green");
    }
  }
  function incCount() {
    setCount(count + 1);
    if (count <= 4) {
      setColor("Red");
    } else if (count > 4) {
      setColor("Green");
    }
  }
  return (
    <>
      <h1 className="title">Counter</h1>
      <div className="counter">
        <button className="btn" onClick={decCount}>
          -
        </button>
        <span>{count}</span>
        <span>{color}</span>
        <button className="btn" onClick={incCount}>
          +
        </button>
      </div>
    </>
  );
}

export default App;