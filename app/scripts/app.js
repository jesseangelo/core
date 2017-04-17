(function() {
  'use strict';

  var app = angular.module('app', ['dd-ui-core', 'ui.router', 'kendo.directives', 'app.documentAccessReport', 'app.complianceReport']);
  app.config(routeConfig);

  //shouldn't be in the core...
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
      })
      .state('complianceReport', {
        url: 'complianceReport',
        controller: 'ComplianceReportController',
        controllerAs: 'ctrl',
        templateUrl: '/compliance-report/v1/index.html'
      });
  }


  app.controller('prototypeController', prototypeController);

  function prototypeController($state) {
      var ctrl = this;

      init();

      function init() {
        $state.go('index');

      }

  }

})();
