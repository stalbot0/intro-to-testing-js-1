// Unit tests for the helloWorld function
// EXERCISE 1
describe('helloWorld', function() { //description is just a label to show what is being done on the page
    it('should be a defined function', function() { //
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// EXERCISE 2-9
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "This is null" when executed', function () {
        expect(sayHello(null)).toBe("This is null");
    });
    it('should return the string "This is an empty string" when executed', function () {
        expect(sayHello("")).toBe("This is an empty string");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    })
    it(`should return a Boolean when called`, function() {
        expect(typeof isFive()).toBe("boolean");
    })
    it(`should return a Boolean value when executed`, function () {
        expect(isFive(Number)).toBe(true);
    });
    it(`should return a Boolean value when executed`, function () {
        expect(isFive("5")).toBe(true);
    });
})