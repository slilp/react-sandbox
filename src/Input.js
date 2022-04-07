import React, { useState } from "react";
import PropTypes from "prop-types";

function Input({ secretWord = "GG" }) {
  const [currentGuess, setCurrentGuess] = useState("");
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
};

export default Input;
