const caller=require("./calc");
console.log(caller);  //this is a default object which have everything into it

// console.log(caller.calc.add(100,200));

console.log(caller.add(100,200));
console.log(caller.PI);
console.log(caller.pr());