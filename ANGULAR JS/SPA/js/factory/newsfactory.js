app.factory("newsfactory",function($http,$q,NEWS){
    console.log("newsfactory");
    var object={
        callToServer(){
            var defer=$q.defer();
            $http.get(NEWS).then(function(data){
              defer.resolve(data);
            },function(error){
              defer.reject(error);
            });
            return defer.promise;
        }
    }
    return object;
})