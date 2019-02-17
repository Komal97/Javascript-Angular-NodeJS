app.controller("aboutusctrl",function($scope,$routeParams){
    console.log("aboutuscontroller");
    $scope.companyName="TCS";
    $scope.details="Software Development Company";
    $scope.discount=$routeParams.discount;
    $scope.offer=$routeParams.offernumber;
})