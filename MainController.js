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

        $scope.username = "Stevo5o"
        $scope.countdown = 12;
        startCountdown();

    };

    var app = angular.module('app')
        .controller('MainController', ["$scope", '$interval', '$location', MainController]);

}()); // end IFFE
