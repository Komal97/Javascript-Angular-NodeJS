app.controller("ctrl",($scope,myfactory)=>{
   $scope.buttons=myfactory.prepareButtons();
   var isXorZero=false;
   $scope.printXorZero=function(row){
       var value=isXorZero?"X":"O";
       myfactory.updateButton(row,value);
       isXorZero=!isXorZero;
       $scope.buttons=myfactory.buttons;
   }
})
