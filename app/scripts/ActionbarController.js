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

function ActionbarController() {
}



angular.module('app').component('actionbar', {
  templateUrl: '/scripts/templates/actionbar.html',
  controller: ActionbarController
});