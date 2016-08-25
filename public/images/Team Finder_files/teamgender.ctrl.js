angular
	.module('meanApp')
	.controller('TeamGenderCtrl', TeamGenderCtrl);
	
	function TeamGenderCtrl(sportSrv,$state) {
		var ctrl = this;
			ctrl.testMsg = "TeamGenderCtrl";

			ctrl.sport = sportSrv.sport;

			ctrl.gender;
			
			console.log(ctrl.testMsg);
	}

