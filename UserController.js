(function() {

    function UserController($scope, github, $routeParams) {

        function onUserComplete(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos, onError);
        };

        var onRepos = function(data) {
            $scope.repos = data;
        };

        function onError(reason) {
            $scope.error = "Could not fetch the user";
        };

        $scope.username = $routeParams.username;
        $scope.repoSortOrder = "-stargazers_count";
        github.getUser($scope.username).then(onUserComplete, onError)


    };

    angular.module('app')
        .controller('UserController', ["$scope", 'github', '$routeParams', UserController]);

}()); // end IFFE
