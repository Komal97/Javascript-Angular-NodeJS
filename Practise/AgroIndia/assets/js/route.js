var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when("/", {
            templateUrl: "main.html",
            controller: ""
        })
        .when("/main", {
            templateUrl: "main.html",
            controller: ""
        })
        .when("/about-us", {
            templateUrl: "about-us.html",
            controller: ""
        })
        .when("/dealers", {
            templateUrl: "dealers.html",
            controller: ""
        })
        .when("/contact-us", {
            templateUrl: "contact-us.html",
            controller: ""
        })
        .when("/horticulture", {
            templateUrl: "horticulture.html",
            controller: ""
        })
        .when("/floriculture", {
            templateUrl: "floriculture.html",
            controller: ""
        })
        .when("/vegetables", {
            templateUrl: "vegetables.html",
            controller: ""
        })
        .when("/spices", {
            templateUrl: "spices.html",
            controller: ""
        })
        .when("/hindi-competitve-books", {
            templateUrl: "hindi-competitve-books.html",
            controller: ""
        })
        .when("/agriculture-engineering", {
            templateUrl: "agriculture-engineering.html",
            controller: ""
        })
        .when("/pathology", {
            templateUrl: "pathology.html",
            controller: ""
        })
        .when("/forestry", {
            templateUrl: "forestry.html",
            controller: ""
        })
        .when("/genetics-plant-breeding", {
            templateUrl: "genetics-plant-breeding.html",
            controller: ""
        })
        .when("/our-best-selling", {
            templateUrl: "our-best-selling.html",
            controller: ""
        })
});
