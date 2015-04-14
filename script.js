// Controllers

(function() {

    function MainController($scope) {

        $scope.message = "Hello, Angular!";

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", MainController]);

}()); // end IFFE
