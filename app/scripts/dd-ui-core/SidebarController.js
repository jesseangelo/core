angular.module('dd-ui-core').component('sidebar', {
  templateUrl: '/scripts/dd-ui-core/templates/sidebar.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;
		//ctrl.showDefaultContent = false;
		ctrl.showExtendedSearch = false;
		ctrl.ddUiCoreService = ddUiCoreService;

		//API
		ctrl.clickShow = clickShow;

		function clickShow() {
			ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
		}

	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  	title: '@',
  	showDefaultContent: '='
  }
});
