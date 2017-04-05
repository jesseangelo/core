angular.module('dd-ui-core').component('modal', {
  templateUrl: '/scripts/dd-ui-core/templates/modal.html',
  controller: ['ddUiCoreService', function(ddUiCoreService, $uibModal) {
		var ctrl = this;
		//ctrl.showDefaultContent = false;
		ctrl.ddUiCoreService = ddUiCoreService;
    ctrl.openModal = openModal;

    function openModal (size, parentSelector) {
      console.log('modal');
      // var parentElem = parentSelector ?
      //   angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
      // var modalInstance = $uibModal.open({
      //   animation: $ctrl.animationsEnabled,
      //   ariaLabelledBy: 'modal-title',
      //   ariaDescribedBy: 'modal-body',
      //   template: '<div class=modal>modal</div>',
      //   controller: 'ModalInstanceCtrl',
      //   controllerAs: '$ctrl',
      //   size: size,
      //   appendTo: parentElem,
      //   resolve: {
      //     items: function () {
      //       return $ctrl.items;
      //     }
      //   }
      // });
    }


	}],
  controllerAs: 'ctrl',
  transclude: true,
  bindings: {
  }
});
