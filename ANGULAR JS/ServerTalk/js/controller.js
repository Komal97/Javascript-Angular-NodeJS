app.controller("myctrl",($scope,myfactory)=>{
    $scope.loadData=()=>{

        // myfactory.callToserver($scope);       if we do this ,then 
        var promise=myfactory.callToserver();
        console.log("controller loading ends...");

        //do something else before getting the promise result
        for(let i=0;i<10;i++){
            console.log("I m doing something else ",i);
        }

        //promise.then will run only after data have returned
        promise.then(function(res){        //data ans error are variables
            $scope.data1=res;
        },function(err){
            $scope.data1=err;
        })
    }
});