module.exports = {
  ...jest.requireActual(".."),
  __esModule: true,
  // TODO : update return value from Redux / context function
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve("party")),
};
