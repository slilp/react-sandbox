import React, { useState } from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { checkProps, findByTestAttr } from "../test/utils";

const setUp = (props = { secretWord: "party" }) =>
  shallow(<Input {...props}></Input>);

const mockSetCurrentGuess = jest.fn();
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: (initialState) => [initialState, mockSetCurrentGuess],
}));

test("render without error", () => {
  const wrapper = setUp();
  const component = findByTestAttr(wrapper, "component-input");
  expect(component.length).toBe(1);
});

test("not props error", () => {
  checkProps(Input, { secretWord: "gg" });
});

describe("state control input field", () => {
  let wrapper;
  //   let mockSetCurrentGuess = jest.fn();

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setUp();
  });

  test("state update when inut box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field clear when submit", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click");
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
