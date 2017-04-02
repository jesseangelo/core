function SidebarController() {
	var ctrl = this;
	//ctrl.showDefaultContent = false;

	ctrl.clickShow = clickShow;
  ctrl.showExtendedSearch = false;

	function clickShow() {
		ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
	}

}



angular.module('dd-ui-core').component('sidebar', {
  templateUrl: '/scripts/templates/sidebar.html',
  controller: SidebarController,
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  	title: '@',
  	showDefaultContent: '='
  }
});