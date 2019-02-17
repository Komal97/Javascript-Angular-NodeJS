app.controller("initctrl",($scope,initfactory)=>{    
      $scope.Compute=()=>{
        $scope.hra=initfactory.hra($scope.salary);
        $scope.da=initfactory.da($scope.salary);
        $scope.ta=initfactory.ta($scope.salary);
        $scope.pf=initfactory.pf($scope.salary);
        $scope.gs=initfactory.gs($scope.salary);
        $scope.tax=initfactory.tax($scope.salary);
        $scope.ns=initfactory.ns($scope.salary);
      }
});

