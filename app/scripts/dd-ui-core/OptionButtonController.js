angular.module('dd-ui-core').component('optionButton', {
  templateUrl: '/scripts/dd-ui-core/templates/optionButton.html',
  controller: ['ddUiCoreService', function(ddUiCoreService) {
		var ctrl = this;
		//ctrl.showDefaultContent = false;
		ctrl.ddUiCoreService = ddUiCoreService;


	}],
  controllerAs: 'ctrl',
  bindings: {
    label: '@',
    myId: '@'
  }
});
