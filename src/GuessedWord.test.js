import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../test/utils";
import GuessedWord from "./GuessedWord";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

const setUp = (props = {}) => {
  const setProps = { ...defaultProps, ...props };
  return shallow(<GuessedWord {...setProps}></GuessedWord>);
};

test("not props error", () => {
  checkProps(GuessedWord, defaultProps);
});

describe("if there are no word guess", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({ guessedWord: [] });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guess");
    expect(component.length).toBe(1);
  });
  test("render instruction", () => {
    const instruction = findByTestAttr(wrapper, "guess-instruction");
    expect(instruction.text().length).not.toBe(0);
  });
});

describe("if there are words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp({
      guessedWord: [
        { guessedWord: "train", letterMatchCount: 3 },
        { guessedWord: "agile", letterMatchCount: 1 },
        { guessedWord: "party", letterMatchCount: 5 },
      ],
    });
  });
  test("render without error", () => {
    const component = findByTestAttr(wrapper, "component-guess");
    expect(component.length).toBe(1);
  });
  test("render guessed words section", () => {
    const guessWordNode = findByTestAttr(wrapper, "guessed-words");
    expect(guessWordNode.length).toBe(1);
  });
  test("correct number of guess word", () => {
    const guessWord = findByTestAttr(wrapper, "guessed-word");
    expect(guessWord.length).toBe(3);
  });
});

describe("if there are no word guess", () => {});
