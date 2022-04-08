export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetters = secretWord.split("");
  const guessWordSet = new Set(guessedWord);
  return secretLetters.filter((letter) => guessWordSet.has(letter)).length;
}
