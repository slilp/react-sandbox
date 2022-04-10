import moxios from "moxios";
import { getSecretWord, correctGuess } from ".";

describe("correctGuess", () => {
  test("return an action with type CORRECT_GUESS", () => {
    const action = correctGuess();
    expect(action).toStrictEqual({});
  });
});

describe("getSecretWord", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("secretWord is returned", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: "party",
      });
    });

    //update to test app in Redux / context sections
    return getSecretWord().then((secretWord) => {
      expect(secretWord).toBe("party");
    });
  });
});
