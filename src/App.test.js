import { shallow, mount } from "enzyme";
import App from "./App";
import { findByTestAttr, storeFactory } from "../test/utils";
import { Provider } from "react-redux";

// activate global mock to make sure getSecretWord does not make network call
jest.mock("./actions");
import { getSecretWord as mockGetSecretWord } from "./actions";

const setUp = () => {
  const store = storeFactory();
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("renders without error", () => {
  const wrapper = setUp();
  // console.log(wrapper.debug());
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders button", () => {
  const wrapper = setUp();
  const buttonComponent = findByTestAttr(wrapper, "increment-button");
  expect(buttonComponent.length).toBe(1);
});

test("render counter display", () => {
  const wrapper = setUp();
  const couterDisplay = findByTestAttr(wrapper, "counter-display");
  expect(couterDisplay.length).toBe(1);
});

test("counter star at 0", () => {});

test("click on incremental button counter display", () => {
  const wrapper = setUp();

  // find button
  const button = findByTestAttr(wrapper, "increment-button");

  // click button
  button.simulate("click");

  //
  const count = findByTestAttr(wrapper, "count").text();
  expect(count).toBe("1");
});

describe("decrement button", () => {
  test("render decrement button", () => {
    const wrapper = setUp();
    const button = findByTestAttr(wrapper, "decrement-button");
    expect(button.length).toBe(1);
  });

  test("decrement button when state not zero", () => {
    const wrapper = setUp();
    // find button
    const incrementButton = findByTestAttr(wrapper, "increment-button");

    // click button
    incrementButton.simulate("click");

    const decrementButton = findByTestAttr(wrapper, "decrement-button");
    decrementButton.simulate("click");
    const count = findByTestAttr(wrapper, "count").text();
    expect(count).toBe("0");

    const error = findByTestAttr(wrapper, "error-message");
    expect(error.length).toBe(0);
  });

  describe("decrement buton when state is zero", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
      const decrementButton = findByTestAttr(wrapper, "decrement-button");
      decrementButton.simulate("click");
    });
    test("count is zeo", () => {
      const count = findByTestAttr(wrapper, "count").text();
      expect(count).toBe("0");
    });
    test("error-message show", () => {
      const error = findByTestAttr(wrapper, "error-message");
      expect(error.length).toBe(1);
    });
    test("error-message not show afer increment", () => {
      const incrementButton = findByTestAttr(wrapper, "increment-button");
      incrementButton.simulate("click");
      const errorTwo = findByTestAttr(wrapper, "error-message");
      expect(errorTwo.length).toBe(0);
    });
  });
});

describe("get secret words", () => {
  beforeEach(() => {
    mockGetSecretWord.mockClear();
  });
  test("getSecretWord on app mount", () => {
    const wrapper = setUp();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test("getSecretWord does not run on app update", () => {
    const wrapper = setUp();

    mockGetSecretWord.mockClear();

    //using setProps because wrapper.update() doesnot trigger useEffect
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
});
