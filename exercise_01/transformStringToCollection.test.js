import transformStringToArray from "./transformStringToCollection.js";

describe("Given a function transformStringToArray", () => {
    describe("When it receives a string", () => {
        test("Then an array should be returned", () => {

            //Arrange
            const value = "This is a string";

            //Act
            const result = transformStringToArray(value, onError, onSuccess);

            //Assert
            expect(result).toEqual(["This", "is", "a", "string"]);

        });
    });

});

