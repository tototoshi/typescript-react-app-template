import "./app.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <React.Fragment>
      <h2>About</h2>
    </React.Fragment>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <span>Count:</span>
        <span>{count}</span>
      </div>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
