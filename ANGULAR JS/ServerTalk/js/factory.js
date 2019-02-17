app.factory("myfactory",($http,URL,$q)=>{
//    const object={};
//    object.callToserver=()=>{

//    }

const object={

    // callToserver(scope){}
    callToserver(){
      
      console.dir($q);

      var defer=$q.defer();
       // $http.get(URL);            its async and its type is promise
       $http.get(URL).then(function(response){       //then has two arg - first arg:success func & sec arg:failure func
           defer.resolve(response);
           //scope.data=response; 
           console.log("success",response);
       },function(err){
           defer.reject(err);
           console.log("reject",err);
       });
       console.log("call end..");
       return defer.promise;
    }
  }
  return object;
});