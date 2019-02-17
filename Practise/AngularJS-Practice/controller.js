var myApp = angular.module("myModule", []);

myApp.filter("gender", function () {
    return function (gender) {
        switch (gender) {
            case 1:
                return "Male";
            case 2:
                return "Female";
        };
    };
});


myApp.controller("myController", function ($scope) {
    var employees = [
        {
            name: "Sunny",
            dob: new Date("12 October, 1992"),
            gender: 1,
            salary: 20000,
            address: "Vinod Nagar"
        },
        {
            name: "Suresh",
            dob: new Date("11 August, 1993"),
            gender: 1,
            salary: 21000,
            address: "Agra"
        },
        {
            name: "Rajkumar",
            dob: new Date("09 July, 1990"),
            gender: 1,
            salary: 17000,
            address: "Delhi"
        },
        {
            name: "Mansi",
            dob: new Date("15 August, 1995"),
            gender: 2,
            salary: 10000,
            address: "Laxmi Nagar"
        },
        {
            name: "Khusbu",
            dob: new Date("20 october, 1994"),
            gender: 2,
            salary: 20000,
            address: "Bihar"
        },
        {
            name: "Arnab",
            dob: new Date("23 December, 1992"),
            gender: 1,
            salary: 23000,
            address: "Dwarka"
        },
        {
            name: "Deepu",
            dob: new Date("05 December, 1994"),
            gender: 2,
            salary: 40000,
            address: "Noida"
        }
   ];

    $scope.employee = employees;

    $scope.ascdsc = "name";

    $scope.view = "table-view.html";

    $scope.colasc = "name";
    $scope.colrevrse = false;
    $scope.changeOrder = function (col) {
        $scope.colrevrse = ($scope.colasc == col) ? !$scope.colrevrse : false;
        console.log( $scope.colrevrse );
        console.log( $scope.colasc);
        $scope.colasc = col;
    }

    $scope.changeClass = function (col) {
        if ($scope.colasc == col) {
          //  console.log($scope.colasc);
            return $scope.colrevrse ? 'arrow-down' : 'arrow-up'
        }

        return '';
    }

    $scope.viewhide = false;

    var languages = [
        {
            name: "C#",
            likes: 0,
            dislikes: 0
        },
        {
            name: "C",
            likes: 0,
            dislikes: 0
        },
        {
            name: "C++",
            likes: 0,
            dislikes: 0
        },
        {
            name: "Java",
            likes: 0,
            dislikes: 0
        }
    ];

    $scope.lang = languages;

    $scope.incrimentLikes = function (o) {
        o.likes++;
    };

    $scope.incrimentDislikes = function (o) {
        o.dislikes++;
    };

});
