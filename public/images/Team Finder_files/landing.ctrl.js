angular
	.module('meanApp')
	.controller('LandingCtrl', LandingCtrl)
	

	function LandingCtrl(sportSrv,$state) {
		var ctrl = this;
		ctrl.testMsg = "LandingCtrl";
			
		console.log(ctrl.testMsg);
		ctrl.sortType  ='sort Type';
		ctrl.sortReverse =false;
		ctrl.searchSports = '';

		ctrl.sports = [

			{ location: 'Toronto', type: 'Women-Recreational', sport: 'Hockey' },
			{ location: 'Vancouver', type: 'co-ed-competitive', sport: 'Football'	},
			{ location:  'Montreal', type: 'men-recreational', sport: 'Hockey'}
		]

		ctrl.print = function(sport){
			sportSrv.sport = sport;
			console.log(sportSrv.sport)
			$state.go('teamId')
		}
	}


	


