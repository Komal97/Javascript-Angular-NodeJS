// arg are same as factory
// $scope = dependency injection ,it is not present in controller itself

app.controller("initctrl",($scope,initfactory)=>{  //controller start and from here 'initfactory' goes to factory
    
    console.log("controller start..",initfactory);
    $scope.fullName=()=>{
    $scope.fullname=initfactory.initCap($scope.firstname)+" "+initfactory.initCap($scope.lastname);
  }
});

// function mycontroller($scope,initfactory){
//     console.log("controller start..",initfactory);
//     $scope.fullName=()=>{
//     $scope.fullname=initfactory.initCap($scope.firstname)+" "+initfactory.initCap($scope.lastname);
//   }
// }

// app.controller("initctrl",mycontroller);