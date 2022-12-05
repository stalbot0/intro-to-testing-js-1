// helloWorld function
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(input) {
    if (input === true) {
        return 'Hello, World!';
    } else if (input === null) {
        return `This is ${input}`;
    } else if (input === "") {
        return "This is an empty string";
    }
    return (`Hello, ${input}!`);
}

// isFive function
function isFive(number) {
    if (number === "5") {
        return true;
    }
    return number === Number;
}

// isEven
function isEven(input) {
    if (typeof input === 'string') {
        return "NaN";
    }
    return input % 2 === 0;
}
console.log(isEven());