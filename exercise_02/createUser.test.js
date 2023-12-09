import createUser from "./createUser.js";


describe("Given a function createUser", () => {
  describe("When it receives an email", () => {
    test("Then it should return a message", () => {
      //Arrange
      const email = "enmaormaza@gmail.com";

      //Act
      const result = createUser(email, onError, onSuccess);

      //Assert
      expect(result).toBe(
        "User with email enmaormaza@gmail.com has been correctly created",
      );
    });
  });
});
