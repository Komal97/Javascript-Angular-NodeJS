var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    $scope.message = "This is Angular tut";
    var empDetails = {
        FirstName: "Priya",
        LastName: "Sharma",
        Gender: "Female",
        Image: "team1.jpg"
    };
    $scope.emp = empDetails;

    var personDetails = [{
            fName: "Sunny",
            lName: "Rajora",
            gender: "Male"
        },
        {
            fName: "Raj",
            lName: "Kashyap",
            gender: "Male"
        },
        {
            fName: "Suresh",
            lName: "Kumar",
            gender: "Male"
        },
        {
            fName: "Mansi",
            lName: "Arora",
            gender: "Female"
        }];
    $scope.pd = personDetails;

    var countries = [
        {
            Name: "Uk",
            Cities: [
                {
                    name: "London"
                },
                {
                    name: "Manchester"
                },
                {
                    name: "Birmingham"
                }
                     ]
                    },
        {
            Name: "India",
            Cities: [
                {
                    name: "Delhi"
                },
                {
                    name: "Goa"
                },
                {
                    name: "Punjab"
                }
            ]
                    },
        {
            Name: "USA",
            Cities: [
                {
                    name: "Los Angeles"
                },
                {
                    name: "Chicago"
                },
                {
                    name: "Housten"
                }
                    ]
                }
            ]

    $scope.country = countries;

    var technologies = [
        {
            name: "C#",
            like: 0,
            dislike: 0
        },
         {
            name: "Java",
            like: 0,
            dislike: 0
        },
         {
            name: "DotNet",
            like: 0,
            dislike: 0
        },
         {
            name: "Jsp",
            like: 0,
            dislike: 0
        }
    ]
    
    $scope.technology = technologies;
    
    $scope.incriLikes = function(technology){
        technology.like++;
    }
    
     $scope.incriDislikes = function(technology){
        technology.dislike++;
    }
});
