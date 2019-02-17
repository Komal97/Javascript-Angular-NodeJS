app.controller("newsctrl",function($scope,newsfactory){
  
    // loading on button click
    // $scope.loadNews=function(){    
    // var promise=newsfactory.callToServer();
    // promise.then(function(data){
    //     $scope.data=data;
    // },function(err){
    //     $scope.data=err;
    // })
    // }

    //loading automatically
    var promise=newsfactory.callToServer();
    promise.then(function(data){
        $scope.data=data;
    },function(err){
        $scope.data=err;
    })
})