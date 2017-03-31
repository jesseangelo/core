// (function() {
// 	var module = angular.module('app');

// 	function controller() {
// 		var model = this;
// 	}

// 	module.component("heroDetail", {
// 		templateUrl: '/scripts/heroDetail.html',
// 		transclude: true
// 	})

// }());

function SidebarController() {
	var ctrl = this;
}



angular.module('app').component('sidebar', {
  templateUrl: '/scripts/templates/sidebar.html',
  controller: SidebarController,
  controllerAs: 'ctrl',
  bindings: {
  	title: '@'
  }
});