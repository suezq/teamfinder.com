angular
	.module('meanApp')
	.controller('TeamStatCtrl', TeamStatCtrl);
	
	function TeamStatCtrl() {
		var ctrl = this;
			ctrl.testMsg = "TeamStatCtrl";
			
			console.log(ctrl.testMsg);
	}