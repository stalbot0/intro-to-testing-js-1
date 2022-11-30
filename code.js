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
