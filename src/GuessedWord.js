import React from "react";
import PropTypes, { arrayOf } from "prop-types";

function GuessedWord(props) {
  const { guessedWord } = props;
  return (
    <div data-test="component-guess">
      {guessedWord.length === 0 && (
        <span data-test="guess-instruction">Try to guess secret word</span>
      )}
      {guessedWord.length !== 0 && (
        <div data-test="guessed-words">
          <h3>Guess word</h3>
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Match Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWord.map((word, index) => (
                <tr key={index} data-test="guessed-word">
                  <th>{word.guessedWord}</th>
                  <th>{word.letterMatchCount}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ),
};

export default GuessedWord;
