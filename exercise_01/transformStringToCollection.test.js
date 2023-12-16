import transformStringToArray from "./transformStringToCollection.js";

// describe("Given a function transformStringToArray", () => {
//   describe("When it receives a string", () => {
//     test("Then an array should be returned", () => {
//       //Arrange
//       const value = "This is a string";

//       //Act
//       const result = transformStringToArray(value, onError, onSuccess);

//       //Assert
//       expect(result).toEqual(["This", "is", "a", "string"]);
//     });
//   });
// });

describe("Given trasformStringToArray function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockOnError = jest.fn().mockImplementation(() => []);
  const mockOnSuccess = jest
    .fn()
    .mockImplementation((value) => value.split(" "));

  test("When value it's empty. Then expected error empty array should be returned", () => {
    //Arrange
    const value = "";

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When value it's not a string (number). Then expected error empty array should be returned", () => {
    //Arrange
    const value = 4;

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When value it's not a string (boolean). Then expected error empty array should be returned", () => {
    //Arrange
    const value = true;

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When value it's not a string (array). Then expected error empty array should be returned", () => {
    //Arrange
    const value = [1, 2, 3];

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toEqual([]);
    expect(mockOnError).toHaveBeenCalledTimes(1);
  });

  test("When value it's a string. Then expected and return an array with all words contained in it (split) ", () => {
    //Arrange
    const value = "This is a string";

    //Act
    const result = transformStringToArray(value, mockOnError, mockOnSuccess);

    //Assert
    expect(result).toEqual(["This", "is", "a", "string"]);
    expect(mockOnSuccess).toHaveBeenCalledTimes(1);
    expect(mockOnError).toHaveBeenCalledTimes(0);
  });
});
