console.log('--------------- Arrays ---------------');

// EXAMPLE - 1

const boxes = document.querySelectorAll('.box');

// ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(el) {
//     el.style.backgroundColor = 'dodgerblue';
// });

// for (var i = 0; i < boxesArr5.length; i++) {
//     if (boxesArr5[i].className === 'box blue') {
//         continue;
//         //break;
//     }
//     boxesArr5[i].textContent = 'I changed to blue!!';
// }


//ES6
var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(el => el.style.backgroundColor = 'dodgerblue');

// for 'of' loop is combination of forEach and normal 'for' loop
for (const element of boxesArr6) {
    if (element.className.includes('blue')) {
        continue;
    }
    element.textContent = 'I changed to blue!!';
}

// EXAMPLE - 2 - find ages which are greater than equal to 18

// ES5
var ages = [12, 17, 8, 21, 14, 11];

// create boolean array using map function, then find index
var fullage = ages.map(function(cur) {
    return cur >= 18;
});
console.log(fullage);
console.log(fullage.indexOf(true));
console.log(ages[fullage.indexOf(true)]);

// ES6
// directly find index of element(combination of map and indexOf)
let index = ages.findIndex(current => current >= 18);
console.log(index);
let element = ages.find(current => current >= 18);
console.log(element);