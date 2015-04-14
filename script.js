// Directives & Views

(function() {

    // controller
    function MainController($scope, $http) {

        function onUserComplete(response) {
            $scope.user = response.data;
        };

        function onError(reason) {
        	$scope.error = "Could not fetch the user";
        };

        $http.get("https://api.github.com/users/stevo5o")
            .then(onUserComplete, onError);

        #4scope.username = "angular"
        $scope.message = "GitHub Viewer";

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", '$http', MainController]);

}()); // end IFFE
