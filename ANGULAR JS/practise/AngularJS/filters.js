var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {
    var employees = [
        {
            name: "Sunny",
            dob: new Date("November 23, 1990"),
            gender: "Male",
            salary: 99999.999
        },
        {
            name: "Deepti",
            dob: new Date("December 05, 1993"),
            gender: "Female",
            salary: 50000.333
        },
        {
            name: "Suresh",
            dob: new Date("October 03, 1992"),
            gender: "Male",
            salary: 33399.39
        },
        {
            name: "Raj",
            dob: new Date("July 14, 1996"),
            gender: "Male",
            salary: 55599.49
        },
        {
            name: "Mansi",
            dob: new Date("June 18, 1998"),
            gender: "Female",
            salary: 99669.59
        },
        {
            name: "Khusbu",
            dob: new Date("August 23, 1995"),
            gender: "Female",
            salary: 22999.69
        }
    ];

    $scope.employee = employees;

    $scope.rowLimit = "2";

    $scope.sortColumn = "name";

    $scope.reverseSort = false;
    
    $scope.sortData = function (c) {
        console.log(c);
        $scope.reverseSort = ($scope.sortColumn == c) ? !$scope.reverseSort : false;
        $scope.sortColumn = c;
    }

    $scope.getSortClass = function (c) {
        if ($scope.sortColumn == c) {
            return $scope.reverseSort ? 'arrow-down' : 'arrow-up'
        }
        return '';
    }
});
