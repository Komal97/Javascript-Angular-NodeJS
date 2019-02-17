//first arg = factoryname & sec arg = function where logics are defined
//factory always return an object

app.factory("initfactory",()=>{      
    console.log("Factory start.."); 
    var object={                         
        initCap(str){
            return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
        }
     }  
     console.log("factory return ",object);
     return object;                                         
});