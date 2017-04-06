(function() {
  'use strict';

  var app = angular.module('dd-ui-core', ['ui.bootstrap', 'ui.router']);

  app.controller('ddUICoreController', ddUICoreController);
  app.config(routeConfig);


  function routeConfig($stateProvider, $urlRouterProvider) {
  	$stateProvider
  		.state('index', {
  			url: '/',
  			//template: '<span>WORKING!</span>'
  			templateUrl: '/index-app.html'
  		})
      .state('docAccessReport', {
        url: 'docAccessReport',
        templateUrl: '/document-access-report/test-dar.html'
      });

	
  }

  function ddUICoreController(ddUiCoreService, $state, $uibModal) {
      var ctrl = this;
      
      $state.go('index');
      ctrl.getSidebarState = getSidebarState;
      ctrl.getTopbarState = getTopbarState;
      ctrl.openModal = openModal;

      function openModal(size, parentSelector) {
        console.log('modal');

        var parentElem = parentSelector ?
          angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
        var modalInstance = $uibModal.open({
          animation: true,
          ariaLabelledBy: 'modal-title',
          ariaDescribedBy: 'modal-body',
          template: '<div class=modal>modal</div>',
          controller: 'ModalInstanceCtrl',
          controllerAs: 'ctrl',
          size: size,
          appendTo: parentElem,
          resolve: {
            items: function () {
              return ""
            }
          }
        });

      }

      function getSidebarState() {
        return ddUiCoreService.getSidebarState();
      }

      function getTopbarState() {
        return ddUiCoreService.getTopbarState();
      }

  }

})();
