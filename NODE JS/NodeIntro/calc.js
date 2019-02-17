//when we have more than one function then we have to give key 

const calcObject={
    add(x,y){
        return x+y; 
    }
}

module.exports=calcObject;
// module.exports.calc=calcObject;

function print(){
    console.log("I m a print function");
}
module.exports.pr=print;

const PI=3.14;
module.exports.PI=PI;