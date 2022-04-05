import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is current
        <span data-test="count">{count}</span>
      </h1>
      {error && (
        <h3 data-test="error-message" style={{ color: "red" }}>
          Cannot below zero
        </h3>
      )}
      <button
        data-test="increment-button"
        onClick={() => {
          if (error) setError(false);

          setCount((prev) => prev + 1);
        }}
      >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => {
          if (count - 1 < 0) {
            setError(true);
          } else {
            setCount((prev) => prev - 1);
          }
        }}
      >
        Decrease counter
      </button>
    </div>
  );
}

export default App;
