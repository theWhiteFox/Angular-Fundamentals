// Directives & Views
// filters - Basic format:expression |filterName:parameter

(function() {

    // controller
    function MainController($scope, $http) {

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

        $scope.search = function(username) {
            $http.get("https://api.github.com/users/" + username)
                .then(onUserComplete, onError);
        };

        $scope.username = "angular"
        $scope.message = "GitHub Viewer";
        $scope.repoSortOrder = "-stargazers_count";

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", '$http', MainController]);

}()); // end IFFE
