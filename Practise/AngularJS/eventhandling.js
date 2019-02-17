var myApp = angular.module("myModule", []);


myApp.controller("myController", function($scope) {
    var technologies = [
        {
            Name: "C#",
            Likes: 0,
            Dislikes: 0
        },
        {
            Name: "Java",
            Likes: 0,
            Dislikes: 0
        },
        {
            Name: "Python",
            Likes: 0,
            Dislikes: 0
        },
        {
            Name: "Dotnet",
            Likes: 0,
            Dislikes: 0
        }
    ]
    $scope.technology = technologies;
    
    $scope.incriLikes = function(t){
        t.Likes++;
    }
    
    
    $scope.incriDislikes = function(t){
        t.Dislikes++;
    }
});
