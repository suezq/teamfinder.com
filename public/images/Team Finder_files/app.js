(function(){
angular
	.module('meanApp', ['ui.router']);
console.log('app.js')

angular
.module('meanApp')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	  .state('home', {
	  	url:'/home',
	  	templateUrl:'partials/landingpage.html',
	  	// templateUrl: '/partials/landingpage.html',
	  	controller: 'LandingCtrl as ctrl',
	})
	.state('teamId', {
		url:'/sport/teamId',
		templateUrl: 'partials/teamgender.html',
		controller: 'TeamGenderCtrl as ctrl'
	})
	.state('teamStat', {
		url:'/sport/teamStat',
		templateUrl: 'partials/teamstat.html',
		controller: 'TeamStatCtrl as ctrl'
	})
	.state('teamDir', {
		url:'/sport/teamDir',
		templateUrl: '/partials/teamdir.html',
		controller: 'TeamDirCtrl as ctrl'
	});

	
	$urlRouterProvider
		.otherwise('/home');

});
})();