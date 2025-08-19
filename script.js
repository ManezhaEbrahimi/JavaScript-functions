console.log("Hello world!");

// arrow function

const greet = () => {
    console.log("Hello, this is an arrow function!");
}

function greet1 () {
    console.log("Hello, this is a normal function!");
}

greet();
greet1();

const theDayOfTheWeek = () => {
    switch (3) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";   
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";    
        default:
            return "Invalid day";
    }
}

theDayOfTheWeek();
console.log(`Today is: ${theDayOfTheWeek()}`);

// arrow function with parameters
const greetWithNameArrow = (name) => {
    return `Hello, ${name}!`;
}

// function greetWithName(name) {
// return `Hello, ${name}!`;
// }

console.log(greetWithNameArrow("Manezha"));
console.log(greetWithNameArrow("Mostafa"));

let t_name = "Ali";
console.log(greetWithNameArrow(t_name));

const sum = (a, b) => {
    return a + b;
}
sum(5, 10);
sum(20, 30);
sum(100, 200);

console.log(sum(5, 10));
console.log(sum(20, 30));
console.log(sum(100, 200));

// arrow function with default parameters
const greetWithDefaultParametersArrow = (name = "Manezha", l_name = "Ebrahimi") => {
    return `Hello, ${name} ${l_name} !`;
}

console.log(greetWithDefaultParametersArrow());
console.log(greetWithDefaultParametersArrow("Mahdi"));
console.log(greetWithDefaultParametersArrow("Ali", "Rezaei"));

const square = (num) => num * num 
console.log(square(5));

// x = (5 + 2)^2

const square1 = num => {
    // num = num + 2
    num += 2; // equivalent to num = num + 2
    return num * num;
}

console.log(square1(5));

const add = (a, b) => a + b;
console.log(add(3, 20));

// globle scope in function 
let globalVar = "I'm a global variable";
const showGlobalVar = () => {
    console.log(globalVar);
}

showGlobalVar();

// local scope in function
const showLocalVar = () => {
    let localVar = "I'm a local variable";
    console.log(localVar);
}
showLocalVar();

function funScopeExample() {
    var x = 10;
    if (true) {
        var y = 20;
    }
    console.log(x);
    console.log(y);
}
funScopeExample();

function blockScopeExample() {
    let a = 10;
    if (true) {
        const b = 20;
        console.log(a);
        console.log(b);
    }
}  
blockScopeExample();

// closure 
function outerFunction1() {
    let outerVariable = "I'm from outer function";
    
    function innerFunction1() {
        console.log(outerVariable);
    }
    
    return innerFunction1;
}
const closureFunction1 = outerFunction1();
closureFunction1(); // Output: I'm from outer function


const outerFunction = () => {
    let outerVariable = "I'm from outer function";
    
    const innerFunction = () => {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: I'm from outer function


const createCounter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    }
}
const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
const counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3
