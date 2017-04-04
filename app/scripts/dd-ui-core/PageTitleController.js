
angular.module('dd-ui-core').component('pageTitle', {
  templateUrl: '/scripts/dd-ui-core/templates/pageTitle.html',
  controller: ['ddUiCoreService', function PageTitleController(ddUiCoreService) {
		var ctrl = this;
		ctrl.ddUiCoreService = ddUiCoreService;
		//console.log(ddUiCoreService);
	}],
  controllerAs: 'ctrl',
  bindings: {
  	title: '@',
  	subtitle: '@'
  }
});
