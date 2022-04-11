import { combineReducers } from "redux";
import successReducer from "./successReducer";
import guessWordsReducer from "./guessedWordReducer";
import secretWordReducer from "./secretWordReducer";

export default combineReducers({
  success: successReducer,
  guessedWords: guessWordsReducer,
  secretWord: secretWordReducer,
});
