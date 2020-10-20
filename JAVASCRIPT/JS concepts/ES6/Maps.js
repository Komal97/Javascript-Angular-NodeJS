console.log('--------------- MAPS ---------------');

const ques = new Map();

// question
ques.set('question', 'What is the official name of latest major javascript version?');

// options
ques.set(1, 'ES5');
ques.set(2, 'ES6');
ques.set(3, 'ES2015');
ques.set(4, 'ES7');

// correct ans
ques.set('correct', 3);

// response
ques.set(true, 'Correct answer!!');
ques.set(false, 'Wrong answer, Please try again!!');

console.log(ques);

// retrival
console.log(ques.get('question'));
console.log(ques.size);

// delete key
if (ques.has(4)) {
    // ques.delete(4);
    console.log('option 4 is here');
}

// to delete all keys
//ques.clear();

console.log('------------------------------');
ques.forEach((value, key) => {
    console.log(`This is ${key}, and it is set to ${value}`);
})

console.log('------------------------------');
for (let [key, value] of ques.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Enter correct answer'));
let response = ques.get(ans === ques.get('correct'));
console.log(response);