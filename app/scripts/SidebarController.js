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
}



angular.module('app').component('sidebar', {
  templateUrl: '/scripts/templates/sidebar.html',
  controller: SidebarController,
  bindings: {
    hero: '='
  }
});