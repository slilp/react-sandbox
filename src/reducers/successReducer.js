import { actionTypes } from "../actions";

export default (state, action) => {
  switch (action.type) {
    case actionTypes.CORECT_GUESS:
      return true;
    default:
      return false;
  }
};
