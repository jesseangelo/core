angular.module('dd-ui-core').component('content', {
  templateUrl: '/scripts/dd-ui-core/templates/content.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;
	
		ctrl.ddUiCoreService = ddUiCoreService;

	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  }
});
