console.log('--------------- Classes ---------------');

class Person6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hi there');
    }
}

let john6 = new Person6('John', 1990, 'Teacher');
console.log(john6);

Person6.greeting();

console.log('--------------- Inheritance ---------------');

// ES5
var Per5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Per5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGame, medals) {

    Per5.call(this, name, yearOfBirth, job); // 'this' is send bcoz we want 'this' of Person to be set for newly created object with 'new' keyword
    this.olympicGame = olympicGame;
    this.medals = medals;
}
Athlete5.prototype = Object.create(Per5.prototype); // we want prototype of person become prototype of athlete and two function constructors are connected

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthlete = new Athlete5('John', 1990, 'Swimmer', 'Yes', 2);
console.log(johnAthlete);
johnAthlete.calculateAge();
johnAthlete.wonMedal();

// ES6
class Per6 {
    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Per6 {
    constructor(name, yearOfBirth, job, olympicGame, medals) {
        super(name, yearOfBirth, job);
        this.olympicGame = olympicGame;
        this.medals = medals;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

var johnAthlete6 = new Athlete6('John', 1990, 'Swimmer', 'Yes', 2);
console.log(johnAthlete6);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();