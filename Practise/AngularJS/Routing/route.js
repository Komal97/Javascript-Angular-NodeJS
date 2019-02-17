var app = angular.module("demo", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/home", {
            templateUrl: "home.html",
            controller: "homeController"
        })
        .when("/courses", {
            templateUrl: "courses.html",
            controller: "courseController"
        })
        .when("/students", {
            templateUrl: "students.html",
            controller: "studentController"
        })
});

app.controller("homeController", function ($scope) {

})


app.controller("courseController", function ($scope) {

})


app.controller("studentController", function ($scope) {

})
