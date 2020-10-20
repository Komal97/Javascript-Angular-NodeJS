console.log('--------------- Arrow Functions ---------------');
const years = [1990, 1991, 1992, 1993, 1994];

// 1) SYNTAX

// ES5
var ages5 = years.map(function(el) {
    return 2020 - el;
})
console.log(ages5);

// ES6
let ages6 = years.map(el => 2020 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    return `Age element ${index + 1}: ${el}`
});
console.log(ages6);

// 2) USAGE with 'this' keyword

// EXAMPLE - 1
// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var that = this;
        document.querySelector('.green').addEventListener('click', function() {
            // undefined undefined because current function has its own scope and this variable
            // 'this' does not points to box object instead it points to window object
            //var str = 'This is box number ' + this.position + ' and it is in ' + this.color + ' color.';

            // it works fine because now that has outer scope
            var str = 'This is box number ' + that.position + ' and it is in ' + that.color + ' color.';
            console.log(`es5 ${str}`)
            alert(str);
        })
    }
}

box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,

    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {

            let str = `This is box number ${this.position} and it is in ${this.color} color.`;
            console.log(`es6 ${str}`);
            alert(str);
        })
    }
}

box6.clickMe();

// const box6 = {
//     color: 'green',
//     position: 1,

//     it shares 'this' keyword from surrounding which is global window object
//     clickMe: () => {                     

//         document.querySelector('.green').addEventListener('click', () => {
//             
//             undefined and undefined
//             let str = `This is box number ${this.position} and it is in ${this.color} color.`;
//             console.log(`es6 ${str}`);
//             alert(str);
//         })
//     }
// }
// box6.clickMe();

// EXAMPLE - 2

// ES5
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this)); // creates a copy of function and pass 'this' as parameter and functions sets their own 'this' equal to passes 'this'
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


// ES6
function Person(name) {
    this.name = name;
}
Person.prototype.myFriends6 = function(friends) {

    let arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Mike').myFriends6(friends);