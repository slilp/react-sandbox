import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import GuessedWord from "./GuessedWord";
import Congrate from "./Congrate";
import Input from "./Input";
import { getSecretWord } from "./actions";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const success = useSelector((state) => state.success);
  const guessedWords = useSelector((state) => state.guessedWords);

  useEffect(() => {
    getSecretWord();
  }, []);

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
      <GuessedWord guessedWord={guessedWords}></GuessedWord>
      <Congrate success={success}></Congrate>
      <Input success={success} secretWord="party"></Input>
    </div>
  );
}

export default App;
