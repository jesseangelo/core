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

function HeroDetailController() {
}



angular.module('app').component('heroDetail', {
  templateUrl: '/scripts/heroDetail.html',
  controller: HeroDetailController,
  bindings: {
    hero: '='
  }
});