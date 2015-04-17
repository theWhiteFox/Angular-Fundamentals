(function() {

    // controller
    function MainController($scope, $interval, $location) {

        function decrementCountdown() {
            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        var countdownInterval = null;

        function startCountdown() {
            countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            if (countdownInterval) {
                $interval.cancel(countdownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };

        $scope.click

        $scope.username = "angular"
        $scope.countdown = 5;
        startCountdown();

    };

    var app = angular.module('app')
        .controller('MainController', ["$scope", '$interval', '$location', MainController]);

}()); // end IFFE
