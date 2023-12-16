import validateString from "./validateString.js";

describe("Given validateString function", () => {
  describe("When it receives an undefined value", () => {
    test("Then it should return false", () => {
      //Arrange
      const value = undefined;

      //Act
      const result = validateString(value);

      //Assert
      expect(result).toBe(false);
    });
  });

  describe("When ir receives a value taht is diffferent a string", () => {
    test("Then it should return false", () => {
      //Arrange
      const valueNumber = 4;
      const valueBoolean = true;
      const valueArray = ["a", "b", "c"];
      const valueObject = { name: "pepe" };
      const valueEmptyString = "";
      const valueString = "This is a string";

      //Act
      const result1 = validateString(valueNumber);
      const result2 = validateString(valueBoolean);
      const result3 = validateString(valueArray);
      const result4 = validateString(valueObject);
      const result5 = validateString(valueEmptyString);
      const result6 = validateString(valueString);

      //Assert
      expect(result1).toBe(false);
      expect(result2).toBe(false);
      expect(result3).toBe(false);
      expect(result4).toBe(false);
      expect(result5).toBe(false);
      expect(result6).toBe(true);
    });
  });
});
