angular
	.module('meanApp')
	.controller('TeamDirCtrl', TeamDirCtrl);
	
	function TeamDirCtrl() {
		var ctrl = this;
			ctrl.testMsg = "TeamDirCtrl";
		ctrl.sport = sportSrv.sport;

			console.log(ctrl.testMsg);
	}