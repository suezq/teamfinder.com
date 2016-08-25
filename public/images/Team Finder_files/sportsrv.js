angular
	.module('meanApp')
	.service('sportSrv', sportSrv);
	
	function sportSrv() {
		var ctrl = this;
			ctrl.testMsg = "sportSrv";
			
			ctrl.sport; 
			ctrl.group; 
			ctrl.league; 

			console.log(ctrl.testMsg);
	}
