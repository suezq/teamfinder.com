//Initialize the module
var teamfinder = angular.module('teamfinder', ['ngRoute'])

teamfinder.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		'templateUrl': '/templates/lp.html',
		'controller': function($scope, $http, $location) {
			$scope.signup = {
				city: '',
				sport: '',
				type: '',
				league: '',
				email: '',
				password: '',
				password2: ''
			}

			$scope.login = {
				email: '',
				password: ''
			}

			$scope.signupUser = function() {
				$http({
					'method': 'POST',
					'url': '/api/register',
					'data': $scope.signup,
					'withCredentials': true,
				}).then(
					function(res) {
						alert("You have signed up woohoo!")
						$scope.signup = {
							city: '',
							sport: '',
							type: '',
							league: '',
							email: '',
							password: '',
							password2: ''
						}
					},
					function(err) {
						alert(err)
					}
				)
			}

			$scope.loginUser = function() {
				$http({
					'method': 'POST',
					'url': '/api/login',
					'data': $scope.login,
					'withCredentials': true,
				}).then(
					function(res) {
						localStorage.setItem("UserEmail", res.data.email)
						alert("You have logged in woohoo!")
						$scope.login = {
							email: '',
							password: ''
						}
						$location.url("/profile")
					},
					function(err) {
						alert(err)
					}
				)
			}
		}
	})
	.when('/listings', {
		'templateUrl': '/templates/listings.html',
		'controller': function($scope, $http, $location) {
			$scope.filters = {}
			$scope.listings = []
			$scope.UserEmail = localStorage.getItem("UserEmail")
			$scope.getListings = function() {
				$http({
					'url': '/api/team',
					'method': 'GET',
					'withCredentials': true,
					'params': $scope.filters
				}).then(
					function(res) {
						$scope.listings = res.data
					},
					function(err) {
						alert(err)
					}
				)
			}
			$scope.getListings()
		}
	})
	.when('/team/:teamId', {
		'templateUrl': '/templates/teamById.html',
		'controller': function($scope, $http, $location, $routeParams) {
			$scope.team = {}
			$scope.getTeam = function() {
				$http({
					'method': 'GET',
					'url': '/api/team/' + $routeParams.teamId,
					'withCredentials': true
				}).then(
					function(res) {
						console.log(res.data)
						$scope.team = res.data
					},
					function(err) {
						alert(err)
					}
				)
			}
			$scope.getTeam()
			$scope.updateTeam = function() {
				$http({
					'method': 'PATCH',
					'url': '/api/team/' + $routeParams.teamId,
					'withCredentials': true,
					'data': $scope.team
				}).then(
					function(res) {
						alert("Team updated!")
					},
					function(err) {
						alert(err)
					}
				)
			}
		}
	})
	.when('/profile', {
		'templateUrl': '/templates/profile.html',
		'controller': function($scope, $http, $location) {
			$scope.user = {}
			$scope.getUser = function() {
				$http({
					'method': 'GET',
					'url': '/api/user',
					'withCredentials': true,
				}).then(
					function(res) {
						$scope.user = res.data
					},
					function(err) {
						alert(err)
					}
				)
			}
			$scope.getUser()
			$scope.updateUser = function() {
				$http({
					'method': 'PATCH',
					'url': '/api/user',
					'data': $scope.user,
					'withCredentials': true,
				}).then(
					function(res) {
						alert("Profile updated!")
					},
					function(err) {
						alert(err)
					}
				)
			}
			$scope.team = {}
			$scope.newTeam = function() {
				$http({
					'method': 'POST',
					'url': '/api/team',
					'data': $scope.team,
					'withCredentials': true
				}).then(
					function(res) {
						alert("Team created!")
						$scope.team = {}
					},
					function(err) {
						alert(err)
					}
				)
			}
		}
	})
})

teamfinder.directive('header', function() {
	return {
		restrict: 'EA',
		templateUrl: '/templates/header.html'
	}
})

//Create a controller
teamfinder.controller(
	'teamfinder', 
	//Specify the functions (ie: $scope)
	function($scope) {
		//Create a variable in $scope "message"
		$scope.message = ""
	}
)
