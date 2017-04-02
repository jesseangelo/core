function PageTitleController() {
	var ctrl = this;
}


angular.module('dd-ui-core').component('pageTitle', {
  templateUrl: '/scripts/dd-ui-core/templates/pageTitle.html',
  controller: PageTitleController,
  controllerAs: 'ctrl',
  bindings: {
  	title: '@',
  	subtitle: '@'
  }
});