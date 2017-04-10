(function() {
  'use strict';

  var app = angular.module('dd-ui-core', ['ui.bootstrap', 'ui.router', 'kendo.directives', 'app.documentAccessReport']);

  app.controller('ddUICoreController', ddUICoreController);
  app.config(routeConfig);


  function routeConfig($stateProvider, $urlRouterProvider) {
  	$stateProvider
  		.state('index', {
  			url: '/',
  			templateUrl: '/index-app.html'
  		})
      .state('docAccessReport-v1', {
        url: 'docAccessReport/v1',
        controller: 'DocumentAccessReportController1',
        controllerAs: 'ctrl',
        templateUrl: '/document-access-report/v1/index.html'
      })
      .state('docAccessReport-v2', {
        url: 'docAccessReport/v2',
        controller: 'DocumentAccessReportController2',
        controllerAs: 'ctrl',
        templateUrl: '/document-access-report/v2/index.html'
      })
      .state('docAccessReport-v3', {
        url: 'docAccessReport/v3',
        controller: 'DocumentAccessReportController3',
        controllerAs: 'ctrl',
        templateUrl: '/document-access-report/v3/index.html'
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
