//call Register

const User=require("./models/user");
var userObject=new User("Komal","Abcd"); //added record

const userOperations=require("./db/userOperations");
console.log(userOperations.add(userObject));

var userObject2=new User("Komal","xyz"); //record to be checked
//console.log(userOperations.search(userObject)?"Welcome "+userObject.userid:"Invalid Userid or password");
console.log(userOperations.search(userObject2)?"Welcome "+userObject.userid:"Invalid Userid or password");

//call login