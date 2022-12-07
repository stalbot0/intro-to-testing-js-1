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
    if(input % 2 === 0) {
        return true;
    }
    if(typeof input !== "number" || input === Infinity || typeof input === "boolean") {
        return false;
    }
    return false;
}                       // console.log(isEven());

// isVowel
function isVowel(letter) {
    return letter === "a" || letter === "A";
}

// add
function add(x, y) {
    if(isNaN(x) || isNaN(y)){
        return NaN;
    }
    return parseInt(x) + parseInt(y);
}
