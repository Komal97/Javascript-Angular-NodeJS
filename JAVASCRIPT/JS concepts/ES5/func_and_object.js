//---------------------- OBJECT CREATION ---------------------------------
// method - 1
//object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'Teacher'
}

// method - 2
// function constructor

// a. function as member
// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function() {
//         this.age = 2020 - this.yearOfBirth;
//         console.log(this.age);
//     }
// }

// b. function in prototype
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// not present in function constructor but present in its prototype property
// hence inheritance is achieved using prototype
Person.prototype.calculateAge = function() {
    this.age = 2020 - this.yearOfBirth;
    console.log(this.age);
}

Person.prototype.lastname = 'Smith';

var john = new Person('John', 1990, 'Teacher'); // instantiation
var jane = new Person('Jane', 1980, 'Desginer'); // instantiation
var mark = new Person('Mark', 1968, 'Retied'); // instantiation
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastname);
console.log(jane.lastname);

// method - 3
// Object.create
var personProto = {
    calculateAge: function() {
        console.log(23);
    }
}

var john1 = Object.create(personProto);
john1.name = 'John';
console.log(john1);

var jane1 = Object.create(personProto, {
    name: { value: 'Jane' }
});
console.log(jane1);


//---------------------- FUNCTION RETURNING FUNCTION ---------------------------------
function interviewQuestion(job) {
    if (job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');

//---------------------- Immediately Invoked Function Expression (IIFE)---------------------------------

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


// parameter can be passed
(function(goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);
})(5);

//---------------------- BIND, CALL, APPLY ---------------------------------
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style == 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' + this.name);
        } else if (style == 'friendly') {
            console.log('Hey whatsup? I\'m ' + this.name + '. Have a nice ' + timeOfDay);
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age: 23,
    job: 'designer'
}

// emily object borrow method from john
john.presentation.call(emily, 'friendly', 'afternoon'); // call method allow us to set 'this' variable using first argument(emily here).
// same as call, except arguments passed as an array
john.presentation.apply(emily, ['friendly', 'afternoon']);

// bind doesn't call the function immediately, instead if creates a copy of function and 
// store it for later so it return function
// like call, it allows to set 'this' variable explicitely
var johnFriendly = john.presentation.bind(john, 'friendly'); // call with preset argument and store returned function
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('evening');