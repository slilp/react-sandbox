import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ success, secretWord = "GG" }) {
  const [currentGuess, setCurrentGuess] = useState("");
  if (success) {
    return <div data-test="component-input"></div>;
  }
  return (
    <div data-test="component-input">
      <form>
        <input
          data-test="input-box"
          type="text"
          placeholder="enter guess word"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        ></input>
        <button
          data-test="submit-button"
          onClick={(event) => {
            event.preventDefault();
            setCurrentGuess("");
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
};

export default Input;
