// Directives & Views
// filters - Basic format:expression |filterName:parameter

(function() {

    // controller
    function MainController($scope, $http, $interval) {

        function onUserComplete(response) {
            $scope.user = response.data;
            $http.get($scope.user.repos_url)
                .then(onRepos, onError);
        };

        var onRepos = function(response) {
            $scope.repos = response.data;
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

        function startCountdown() {
            $interval(decrementCountdown, 1000, $scope.countdown);
        };

        $scope.search = function(username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.username = "angular"
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";
        $scope.countdown = 5;
        startCountdown();

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", '$http', '$interval', MainController]);

}()); // end IFFE
