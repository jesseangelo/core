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

  app.factory('ddUiCoreService', function() {
    var isSidebarMaximized = true;

    return {
      getSidebarState: function () {
        return isSidebarMaximized;
      },
      maximizeSidebar: function () {
        isSidebarMaximized = true;
      },
      minimizeSidebar: function () {
        isSidebarMaximized = false;
      },
      toggleSidebar: function () {
        isSidebarMaximized = !isSidebarMaximized;
      }
    }

  });

})();
