// Controller

(function() {

    // controller
    function MainController($scope, $http, $interval, $log, $anchorScroll, $location) {

        function onUserComplete(response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
            $location.hash("userDetails");
            $anchorScroll();
        }

        function onError(reason) {
            $scope.error = "Could not fetch the user";
        };

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
        	$log.info("Searching for " + username);
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
                if(countdownInterval) {
                	$interval.cancel(countdownInterval);
                	$scope.countdown = null;
                }
        };

        $scope.username = "angular"
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", '$http', '$interval','$log','$anchorScroll', '$location', MainController]);

}()); // end IFFE
