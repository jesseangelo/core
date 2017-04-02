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



angular.module('dd-ui-core').component('topbar', {
  templateUrl: '/scripts/dd-ui-core/templates/topbar.html',
  controller: TopbarController
   
});