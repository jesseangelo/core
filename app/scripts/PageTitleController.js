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

function PageTitleController() {
	var ctrl = this;
}


angular.module('app').component('pageTitle', {
  templateUrl: '/scripts/templates/pageTitle.html',
  controller: PageTitleController,
  controllerAs: 'ctrl',
  bindings: {
  	title: '@'
  }
});