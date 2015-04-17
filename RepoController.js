(function() {

    function RepoController($scope, github, $routeParams) {

        var onRepo = function(data) {
            $scope.repo = data;
        };

        var onError = function(reason) {
            $scope.error = reason;
        };

        var reponame = $routeParams.reponame;
        var username = $routeParams.username;

        github.getRepoDetails(username, reponame)
            .then(onRepo, onError);
    };

    angular.module('app')
        .controller('RepoController', ["$scope", 'github', '$routeParams', RepoController]);

}()); // end IFFE
