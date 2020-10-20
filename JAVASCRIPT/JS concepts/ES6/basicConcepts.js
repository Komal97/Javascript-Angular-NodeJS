console.log('---------------  BLOCK and IIFE ---------------');

{
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(c); // 30
//console.log(a + b); // shows error

console.log('--------------- Strings ---------------');

// 1) Template Literals
let firstname = 'John';
let lastname = 'Smith';
console.log('This is ' + firstname + ' ' + lastname); // ES5
console.log(`This is ${firstname} ${lastname}`); // ES6

// 2) String functions
const name = `${firstname} ${lastname}`;
console.log(name.startsWith('j'));
console.log(name.endsWith('th'));
console.log(name.includes(' '));
console.log(`${firstname} `.repeat(5));


console.log('--------------- Destructuring ---------------');
// ES5
var john = ['John', 26];
var name5 = john[0];
var age5 = john[1];
console.log(name5, age5);

// ES6
const [name6, age6] = ['John', 26];
console.log(name6, age6);

const obj = {
    'first': 'Komal',
    'last': 'Bansal'
}

const { first, last } = obj;
console.log(first, last);

const { first: a, last: b } = obj;
console.log(a, b);

// return multiple values from function using destructuring
function calcRetirementAge(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age, retireAge] = calcRetirementAge(1990);
console.log(age, retireAge);

console.log('--------------- Spread Operators ---------------');

// Example 1: Pass multiple number of arguments
function addFourEdges(a, b, c, d) {
    return a + b + c + d;
}

let sum = addFourEdges(18, 30, 12, 21);
console.log(sum);

// ES5
var ages = [18, 30, 12, 21];
var sum5 = addFourEdges.apply(null, ages);
console.log(sum5);

// ES5
const sum6 = addFourEdges(...ages);
console.log(sum6);

// Example 2: Join 2 arrays
const familySmith = ['John', 'Jane', 'Bob'];
const familyMiller = ['Bob', 'Mark', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// Example 3: Nodelist
const h = document.querySelector('h1');
const box = document.querySelectorAll('.box');
const all = [h, ...box];
Array.from(all).forEach((current) => {
    current.style.color = 'purple';
})

console.log('--------------- Rest Parameters ---------------');

// ES5
function isFullAge5(limit) {

    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); // start copying from index 1 because limit is at index 0
    console.log(argsArr);

    argsArr.forEach(function(current) {
        var year = new Date().getFullYear();
        console.log((year - current) >= limit);
    })
}

isFullAge5(21, 1990, 2005, 1995);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years);

    years.forEach(current => {
        var year = new Date().getFullYear();
        console.log((year - current) >= limit);
    })
}

isFullAge6(21, 1990, 2005, 1995);

console.log('--------------- Default Parameters ---------------');

// ES5
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
    lastName === undefined ? lastName : 'Smith' ? lastName : lastName;
    nationality === undefined ? nationality : 'american' ? nationality : nationality;
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let johnObj5 = new SmithPerson('John', 1990);
console.log(johnObj5);

let emilyObj5 = new SmithPerson('Emily', 1996);
console.log(emilyObj5);


// ES6
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

let johnObj6 = new SmithPerson('John', 1990);
console.log(johnObj6);

let emilyObj6 = new SmithPerson('Emily', 1996);
console.log(emilyObj6);