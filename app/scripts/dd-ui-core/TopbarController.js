angular.module('dd-ui-core').component('topbar', {
  templateUrl: '/scripts/dd-ui-core/templates/topbar.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;

		ctrl.ddUiCoreService = ddUiCoreService;

	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  	title: '@',
  	showDefaultContent: '='
  }
});
