angular.module('dd-ui-core').component('actionbar', {
  templateUrl: '/scripts/dd-ui-core/templates/actionbar.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;
		//ctrl.showDefaultContent = false;
		ctrl.ddUiCoreService = ddUiCoreService;


	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  }
});
