(function() {
  'use strict';

  var app = angular.module('dd-ui-core', ['ui.bootstrap', 'kendo.directives']);

  app.controller('ddUICoreController', ddUICoreController);

  function ddUICoreController(ddUiCoreService) {
      var ctrl = this;

      ctrl.getSidebarState = getSidebarState;

      function getSidebarState() {
        return ddUiCoreService.getSidebarState();
      }

  }

})();
