// Functional Testing

import { mount } from "enzyme";
import { findByTestAttr } from "../test/utils";

import App from "./App";

const setUp = (state = {}) => {
  const wrapper = mount(<App />);

  const inputBox = findByTestAttr(wrapper, "input-box");
  inputBox.simulate("change", { target: { value: "trian" } });

  const submitButton = findByTestAttr(wrapper, "submit-button");
  submitButton.simulate("click", { preventDefault: () => {} });

  return wrapper;
};

describe("invalid word guess", () => {
  test.todo("guessword table does not get another row");
});

describe.skip("no word guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [],
    });
  });
  test("create guess word table with one row", () => {
    const guessWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRow).toHaveLength(1);
  });
});

describe.skip("some word guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });
  test("create guess word table with one row", () => {
    const guessWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRow).toHaveLength(2);
  });
});

describe.skip("guess correct word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      secretWord: "party",
      success: false,
      guessedWords: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });

    const inputBox = findByTestAttr(wrapper, "input-box");
    inputBox.simulate("change", { target: { value: "party" } });

    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault: () => {} });
  });
  test("create guess word table with one row", () => {
    const guessWordRow = findByTestAttr(wrapper, "guessed-word");
    expect(guessWordRow).toHaveLength(3);
  });
  test("display congrate component", () => {
    const congrates = findByTestAttr(wrapper, "congrate-message");
    expect(congrates.text()).toBe("success");
  });

  test("bot display input/submit component", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    expect(inputBox.exists()).toBe(false);

    const inputButton = findByTestAttr(wrapper, "submit-button");
    expect(inputButton.exists()).toBe(false);
  });
});
