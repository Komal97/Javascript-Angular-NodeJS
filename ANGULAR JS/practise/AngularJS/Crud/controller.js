var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope) {

    var membersList = [
        {
            id: 101,
            fname: "Sunny",
            lname: "Rajora",
            email: "sunnyrajora1992@gmail.com",
            age: 25,
            phone: 9992627652,
            img: "https://ekmillerlab.mit.edu/wp-content/uploads/2015/01/Bastos_mug1.png"
        },
        {
            id: 102,
            fname: "Rajkumar",
            lname: "Kashyap",
            email: "rajkumar@gmail.com",
            age: 29,
            phone: 88765565782,
            img: "https://ekmillerlab.mit.edu/wp-content/uploads/2015/01/Bastos_mug1.png"
        },
        {
            id: 103,
            fname: "Khusbu",
            lname: "Rani",
            email: "khusbu.rani@gmail.com",
            age: 26,
            phone: 9992699779,
            img: "https://www.wowow.be/site/wp-content/uploads/teammember.png"
        },
        {
            id: 104,
            fname: "Mansi",
            lname: "Arora",
            email: "mansiarora@gmail.com",
            age: 21,
            phone: 9966885544,
            img: "https://www.wowow.be/site/wp-content/uploads/teammember.png"
        }
    ]

    $scope.memberList = membersList;

    $scope.edit = function (id) {
        var index = getSelectedIndex(id);
        var member = $scope.memberList[index];
        $scope.id = member.id;
        $scope.fname = member.fname;
        $scope.lname = member.lname;
        $scope.email = member.email;
        $scope.age = member.age;
        $scope.phone = member.phone;
        $scope.img = member.img;
    }

    $scope.delete = function (id) {
        var result = confirm("Are You Sure ?")
        if (result == true) {
            var index = getSelectedIndex(id);
            $scope.memberList.splice(index, 1);
        }
    };

    $scope.add = function () {
        $scope.memberList.push({
            id: $scope.id,
            fname: $scope.fname,
            lname: $scope.lname,
            email: $scope.email,
            age: $scope.age,
            phone: $scope.phone,
            img: $scope.img
        });
        $scope.id = "";
        $scope.fname = "";
        $scope.lname = "";
        $scope.email = "";
        $scope.age = "";
        $scope.phone = "";
        $scope.img = "";
    };

    $scope.update = function() {
        var index = getSelectedIndex($scope.id);
        $scope.memberList[index].fname = $scope.fname;
        $scope.memberList[index].lname = $scope.lname;
        $scope.memberList[index].email = $scope.email;
        $scope.memberList[index].age = $scope.age;
        $scope.memberList[index].phone = $scope.phone;
        $scope.memberList[index].img = $scope.img;
    };

    function getSelectedIndex(id) {
        for (var i = 0; i < $scope.memberList.length; i++) {
            if ($scope.memberList[i].id == id) {
                console.log(i);
                return i;
                return -1;
            }
        }
    };
});
