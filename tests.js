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

describe('isEven', function() {
    it('is a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('returns a boolean value when called', function() {
        expect(typeof isEven(2)).toBe("boolean");
    });
    it('returns true when executed with isEven(2)', function () {
       expect(isEven(2)).toBe(true);
    });
    it('returns true when executed with isEven(-4)', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('returns false when executed with isEven(3)', function () {
        expect(isEven(3)).toBe(false);
    });
    it('returns false when called with isEven("banana")', function () {
        expect(isEven('banana')).not.toBe(typeof "string");
    });
    it('returns true when called with isEven("8")', function () {
        expect(isEven("8")).toBe(true);
    });
    it('returns false when called with isEven(Infinity)', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('returns false when called with a boolean input isEven(true) or isEven(false)', function () {
        expect(isEven(true, false)).toBe(false);
    });
    it('returns false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
})

describe('isVowel', function() {
    it('is a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('returns a boolean value when called', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('returns true when executed with "a"', function() {
        expect(isVowel('a')).toBe(true);
    });
    it('returns true when executed with "A"', function() {
        expect(isVowel('A')).toBe(true);
    });
    it('returns false when executed with the number 4', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('returns false when executed with the boolean value true or false', function() {
        expect(isVowel(true, false)).toBe(false);
    });
    it('returns false when executed with the string literal "banana"', function() {
        expect(isVowel('banana')).toBe(false);
    });
    it('returns false when executed with no argument', function() {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('is a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('returns a number value when called', function() {
        expect(typeof add()).toBe("number");
    });
    it('returns 5 when executed with (2, 3)', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('returns -12 when executed with (-3, -9)', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('returns 11 when executed with ("5", 6)', function() {
        expect(add('5', 6)).toBe(11);
    });
    it('returns 6 when executed with ("-4", "10")', function() {
        expect(add('-4', "10")).toBe(6);
    });
    it('returns NaN when executed with ("banana", "split")', function() {
        expect(add('banana', "split")).toBe(NaN);
    });
});