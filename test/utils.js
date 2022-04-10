import checkPropType from "check-prop-types";
import { createStore } from "redux";
import rootReducers from "../src/reducers";

export const storeFactory = (initialState) => {
  return createStore(rootReducers, initialState);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropType(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);
