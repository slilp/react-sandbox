import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { checkProps, findByTestAttr } from "../test/utils";

const setUp = (props) => {
  const defaultProps = { success: false, secretWord: "party" };
  const setProps = { ...defaultProps, ...props };

  return shallow(<Input {...setProps} />);
};

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
  checkProps(Input, { success: true, secretWord: "gg" });
});

describe("state control input field", () => {
  let wrapper;
  //   let mockSetCurrentGuess = jest.fn();
  let originalUseState;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    // originalUseState = React.useState
    // React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setUp();
  });
  afterEach(() => {
    // React.useState = originalUseState
  });

  test("state update when inut box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field clear when submit", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: () => {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});

describe("render", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ success: true });
    });

    test("Input render without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("Input bos not show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(false);
    });

    test("Submit button  not show", () => {
      const inputButton = findByTestAttr(wrapper, "submit-button");
      expect(inputButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp({ success: false });
    });

    test("Input render without error", () => {
      const inputComponent = findByTestAttr(wrapper, "component-input");
      expect(inputComponent.length).toBe(1);
    });

    test("Input show", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.exists()).toBe(true);
    });

    test("Submit button  show", () => {
      const inputButton = findByTestAttr(wrapper, "submit-button");
      expect(inputButton.exists()).toBe(true);
    });
  });
});
