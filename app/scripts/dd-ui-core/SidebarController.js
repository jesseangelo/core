
angular.module('dd-ui-core').component('sidebar', {
  templateUrl: '/scripts/dd-ui-core/templates/sidebar.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;
		//ctrl.showDefaultContent = false;
		ctrl.showExtendedSearch = false;
		ctrl.isMaximized = true;
		ctrl.ddUiCoreService = ddUiCoreService;

		//API
		ctrl.clickShow = clickShow;
		ctrl.minimizeSidebar = minimizeSidebar;
		ctrl.maximizeSidebar = maximizeSidebar;

		function clickShow() {
			ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
		}

		function minimizeSidebar() {
			ctrl.isMaximized = !ctrl.isMaximized;
	    // $('#sidebar').addClass('minimized').removeClass('col-md-3');
	    // $('#mainWindow').addClass('maximized').removeClass('col-md-9');
	    // $('.actionbar-fixed-bottom').addClass('maximized');
		}

		function maximizeSidebar() {
			ctrl.isMaximized = !ctrl.isMaximized;
		}

		init()
		function init() {
			console.log(ddUiCoreService.getSidebarState());
			console.log(this.ddUiCoreService)
			console.log("sidebar " + ctrl.isSidebarMaximized)
			console.log("title: " + ctrl.title)
		}

	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  	title: '@',
  	showDefaultContent: '=',
		isSidebarMaximized: '<'
  }
});
