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

function MainNavController() {
}



angular.module('app').component('mainNav', {
  templateUrl: '/scripts/templates/mainNav.html',
  controller: MainNavController,
  bindings: {
    hero: '='
  }
});