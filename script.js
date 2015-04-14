// Controller Capabilities
// seperation of concerns
// MVC

(function() {

	// controller
    function MainController($scope) {

    	var person = {
    		firstName: "SteJ",
    		lastName: "O'Connor",
    		imageSrc: "http://stephenoconnor.azurewebsites.net/images/HeadShot.jpg"
    	};

    	// model
        $scope.message = "Hello, Angular!";
        $scope.person = person;

    };

    angular.module('app', [])
        .controller('MainController', ["$scope", MainController]);

}()); // end IFFE
