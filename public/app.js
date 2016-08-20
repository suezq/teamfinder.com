//Initialize the module
var teamfinder = angular.module('teamfinder', [])

//Create a controller
teamfinder.controller(
	'teamfinder', 
	//Specify the functions (ie: $scope)
	function($scope) {
		//Create a variable in $scope "message"
		$scope.message = ""
	}
)
