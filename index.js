let myName = 'Rohan';
console.log(myName);

//  both of these are of type number, js doesn't differentiate between floating point and integer
let age = 20;
let decAge = 30.1;

let yourName = undefined;
let selectedColor = null;

let person = {
    myName: 'RowZ',
    age: '21'
};
// dot notation
person.name = 'John';
console.log(person.name);

// bracket notation
person['name'] = 'Mary';
console.log(person['name']);

// arrays are dynamic in js and are heterogenous
let selectedColors = ['red', 'blue'];
selectedColors[2] = '62';
selectedColors.push('hello')
console.log(selectedColors);
console.log(selectedColors.length);

// function that performs a task
function greet(name){
    console.log('Hello '+name);    
}

greet('John');

// function that calculates a value
function square(number){
    return number * number;
}

let squaredNum = square(16);
console.log(squaredNum);

//note that console.log is also a function call, weirdly enough
// because console is the class and log is the method whatever in the () is the params
