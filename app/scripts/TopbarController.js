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

function TopbarController() {
}



angular.module('app').component('topbar', {
  templateUrl: '/scripts/templates/topbar.html',
  controller: TopbarController,
  bindings: {
    hero: '='
  }
});